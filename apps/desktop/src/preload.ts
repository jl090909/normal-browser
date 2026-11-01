import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("nb", {
  navigate: (url: string) => ipcRenderer.invoke("nb:navigate", url),
});
