import { useMemo } from "react";
import { useFileProcessor } from "./hooks/useFileProcessor";
import "./App.css";
import { getObtainedTextLogs, TEXT_LOGS } from "./config/textLogs";
import { INVENTORY_ITEM_DETAILS } from './config/inventory';
import {
  getObtainedInventoryItems,
  INVENTORY_ITEMS,
} from "./config/inventory";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";

function App() {
  const { result, error, isLoading, pickAndProcessFile } = useFileProcessor();

  const obtainedTextLogs = useMemo(() => {
    if (!result || !result.collected_text_logs) return null;
    try {
      return getObtainedTextLogs(result.collected_text_logs);
    } catch (e) {
      console.error("Error processing text logs:", e);
      return [];
    }
  }, [result]);

  const obtainedInventoryItems = useMemo(() => {
    if (!result || !result.collected_inventory_items) return null;
    try {
      return getObtainedInventoryItems(result.collected_inventory_items);
    } catch (e) {
      console.error("Error processing inventory items:", e);
      return [];
    }
  }, [result]);

  const obtainedTextLogIdsMap = useMemo(() => {
    if (!obtainedTextLogs) return new Map();
    return new Map(obtainedTextLogs.map((log) => [log.id, log.isUnread]));
  }, [obtainedTextLogs]);

  const obtainedInventoryItemsMap = useMemo(() => {
    if (!obtainedInventoryItems) return new Map();
    return new Map(obtainedInventoryItems.map((item) => [item.id, item]));
  }, [obtainedInventoryItems]);

  const formatId = (id: string) => {
    const parts = id.split(".");
    const name = parts[parts.length - 1] || id;
    return name.replace(/_/g, " ");
  };

  return (
    <main className="w-full mx-auto p-8 text-center bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        FNAF: Secret of the Mimic Save Manager
      </h1>

      <p className="mb-6">
        Select your <code>.sav</code> file to get started. The default location
        is usually in{" "}
        <code className="bg-gray-700 p-1 rounded">
          %LOCALAPPDATA%\FNAF_SOTM\Saved\SaveGames
        </code>
        .
      </p>

      <button
        onClick={pickAndProcessFile}
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500"
      >
        {isLoading ? "Processing..." : "Select Save File"}
      </button>

      {error && (
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-red-500">Error</h3>
          <pre className="bg-red-900 border border-red-700 text-red-200 p-4 rounded mt-2 text-left whitespace-pre-wrap">
            {error}
          </pre>
        </div>
      )}

      {result && (
        <div className="mt-8 text-left">
          <h3 className="text-3xl font-bold mb-4">File Data</h3>
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p>
              <strong>Total Time Played:</strong>{" "}
              {new Date(result.total_time_played * 1000)
                .toISOString()
                .slice(11, 19)}
            </p>
            <p>
              <strong>New Game Plus:</strong>{" "}
              {result.is_new_game_plus ? "Yes" : "No"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4">
                Text Logs ({obtainedTextLogIdsMap.size}/{TEXT_LOGS.length})
              </h4>
              <ul className="space-y-2 max-h-96 overflow-y-auto">
                {TEXT_LOGS.map((logId) => (
                  <li
                    key={logId}
                    className={`flex items-center gap-3 ${obtainedTextLogIdsMap.has(logId)
                      ? "text-green-400"
                      : "text-gray-400"
                      }`}
                  >
                    <span
                      className={
                        obtainedTextLogIdsMap.has(logId)
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {obtainedTextLogIdsMap.has(logId) ? "✓" : "✗"}
                    </span>
                    {formatId(logId)}
                    {obtainedTextLogIdsMap.get(logId) !== undefined && (
                      <span className="text-blue-400">({obtainedTextLogIdsMap.get(logId) ? "Unread" : "Read"})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4">
                Inventory Items ({obtainedInventoryItemsMap.size}/
                {INVENTORY_ITEMS.length})
              </h4>
              <ul className="space-y-2 max-h-96 overflow-y-auto">
                {INVENTORY_ITEMS.map((itemId) => {
                  const item = obtainedInventoryItemsMap.get(itemId);
                  return (
                    <li
                      key={itemId}
                      className={`flex items-center gap-3 ${item ? "text-green-400" : "text-gray-400"
                        }`}
                    >
                      <span className={item ? "text-green-500" : "text-red-500"}>
                        {item ? "✓" : "✗"}
                      </span>
                      {INVENTORY_ITEM_DETAILS[itemId]?.name || formatId(itemId)}
                      {item && INVENTORY_ITEM_DETAILS[itemId]?.type === "Items" && (
                        <span className="text-blue-400">(x{item.amount})</span>
                      )}

                      {INVENTORY_ITEM_DETAILS[itemId].explanation && (
                        <Dialog>
                          <DialogTrigger>
                            <span className="text-blue-400">?</span>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{INVENTORY_ITEM_DETAILS[itemId]?.name}</DialogTitle>
                              <DialogDescription><b>BEWARE OF SPOILERS!!! Consider yourself warned.</b></DialogDescription>
                            </DialogHeader>
                            <p className="prose prose-sm">{INVENTORY_ITEM_DETAILS[itemId].explanation}</p>
                            <DialogFooter>
                              <p className="text-sm text-gray-400 prose-sm">Thank you so much to <a href="https://www.reddit.com/user/yukiimei_/" target="_blank" rel="noopener noreferrer" className="text-blue-400">u/yukiimei_</a> for <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/fivenightsatfreddys/comments/1lc6f5w/fnaf_sotm_in_depth_collectibles_guide_and_ending/" className="text-blue-400">this amazing post</a>. All the information is from there.</p>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
