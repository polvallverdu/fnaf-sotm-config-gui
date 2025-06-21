import { useFileProcessor } from "./hooks/useFileProcessor";
import "./App.css";

function App() {
  const { result, error, isLoading, pickAndProcessFile } = useFileProcessor();

  return (
    <main className="container">
      <h1>FNAF: Security Breach Save Manager</h1>

      <p>
        Select your <code>.sav</code> file to get started. The default location is usually in{" "}
        <code>%LOCALAPPDATA%\\fnaf9\\Saved\\SaveGames</code>.
      </p>

      <button onClick={pickAndProcessFile} disabled={isLoading}>
        {isLoading ? "Processing..." : "Select Save File"}
      </button>

      {error && (
        <div>
          <h3>Error</h3>
          <pre className="error-box">{error}</pre>
        </div>
      )}

      {JSON.stringify(result)}
      {result && (
        <div>
          <h3>File Data</h3>
          <div className="result-box">
            <p>
              <strong>Loaded:</strong> {result.loaded}
            </p>
            <p>
              <strong>Total Time Played:</strong> {result.total_time_played}
            </p>
            <p>
              <strong>Is New Game Plus:</strong> {result.is_new_game_plus}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
