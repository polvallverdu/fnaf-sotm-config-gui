import { useState } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { appLocalDataDir } from "@tauri-apps/api/path";
import { invoke } from "@tauri-apps/api/core";

export interface FileResult {
  loaded: boolean;
  total_time_played: number;
  is_new_game_plus: boolean;
  collected_text_logs: any;
  collected_inventory_items: any;
}

export function useFileProcessor() {
  const [result, setResult] = useState<FileResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickAndProcessFile = async () => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const defaultDir = await appLocalDataDir();
      const filePath = await open({
        multiple: false,
        directory: false,
        defaultPath: defaultDir,
        filters: [
          { name: "FNAF Save files", extensions: ["sav"] },
          { name: "All files", extensions: ["*"] },
        ],
      });

      if (typeof filePath === "string") {
        const data: FileResult = await invoke("process_file", { filePath });
        console.log(data);
        setResult(data);
      }
    } catch (e) {
      console.error(e);
      const errorMessage =
        e instanceof Error ? e.message : "An unknown error occurred.";
      setError(`Error processing file: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { result, error, isLoading, pickAndProcessFile };
}
