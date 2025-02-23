import { contextBridge } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import type { Api } from "./preload.d";

// Custom APIs for renderer
const api: Api = {};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error("Failed to expose Electron API in the renderer:", error);
    console.error(error);
  }
} else {
  window.electron = electronAPI;
  window.api = api;
}
