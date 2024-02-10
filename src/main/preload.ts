// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { Dummy } from '@prisma/client';
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// IPC通信用の処理
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
contextBridge.exposeInMainWorld('db', {
  loadDummies: () => ipcRenderer.invoke('db-load-dummies'),
  createDummy: (dummy: Dummy) => ipcRenderer.invoke('db-create-dummy', dummy),
});

contextBridge.exposeInMainWorld('config', {
  getItem: () => ipcRenderer.invoke('config-get-item'),
  setItem: (key: string, value: any) =>
    ipcRenderer.invoke('config-set-item', key, value),
});

export type ElectronHandler = typeof electronHandler;
