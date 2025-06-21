use gvas::{game_version::GameVersion, properties::Property, GvasFile};
use serde::Serialize;
use std::fs::File;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Serialize, Debug)]
struct FileResult {
    loaded: bool,
    total_time_played: f32,
    is_new_game_plus: bool,
    collected_text_logs: Vec<Property>,
    collected_inventory_items: Vec<Property>,
}

#[tauri::command]
fn process_file(file_path: String) -> Result<FileResult, String> {
    let mut file = File::open(file_path).map_err(|e| e.to_string())?;
    let gvas_file = GvasFile::read(&mut file, GameVersion::Default).map_err(|e| e.to_string())?;

    let total_time_played = gvas_file
        .properties
        .get("TotalTimePlayed")
        .and_then(|p| p.get_f32())
        .map(|f| f.value)
        .unwrap_or(0.0.into());

    let game_state_opt = gvas_file
        .properties
        .get("GameState")
        .and_then(|p| p.get_struct())
        .and_then(|s| s.value.get_custom_struct());

    let (is_new_game_plus, collected_text_logs, collected_inventory_items) =
        if let Some(game_state) = game_state_opt {
            let is_new_game_plus = game_state
                .get("bIsNewGamePlus")
                .and_then(|v| v.first())
                .and_then(|p| p.get_bool())
                .map(|b| b.value)
                .unwrap_or(false);

            let collected_text_logs = game_state
                .get("CollectedTextLogs")
                .cloned()
                .unwrap_or_else(Vec::new);

            let collected_inventory_items = game_state
                .get("CollectedInventoryItems")
                .cloned()
                .unwrap_or_else(Vec::new);

            (
                is_new_game_plus,
                collected_text_logs,
                collected_inventory_items,
            )
        } else {
            (false, Vec::new(), Vec::new())
        };

    Ok(FileResult {
        loaded: true,
        total_time_played: total_time_played.into(),
        is_new_game_plus,
        collected_text_logs,
        collected_inventory_items,
    })
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, process_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
