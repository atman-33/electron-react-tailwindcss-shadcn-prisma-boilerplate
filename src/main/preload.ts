// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { UpdateBulletinIsEditingInput } from './api/bulletins/dto/update-bulletin-is-editing-input.dto';
import { UpsertBulletinInput } from './api/bulletins/dto/upsert-bulletin-input.dto';
import { CreateDummyInput } from './api/dummies/dto/create-dummy-input.dto';
import { UpdateDummyInput } from './api/dummies/dto/update-dummy-input.dto';

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
// レンダラープロセス通信用のAPI
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
contextBridge.exposeInMainWorld('db', {
  // ---- Dummies ---- //
  getDummies: () => ipcRenderer.invoke('db/get-dummies'),
  createDummy: (createDummyInput: CreateDummyInput) =>
    ipcRenderer.invoke('db/create-dummy', createDummyInput),
  updateDummy: (updateDummyInput: UpdateDummyInput) =>
    ipcRenderer.invoke('db/update-dummy', updateDummyInput),
  deleteDummies: () => ipcRenderer.invoke('db/delete-dummies'),

  // ---- Bulletins ---- //
  getBulletins: () => ipcRenderer.invoke('db/get-bulletins'),
  getBulletin: (id: number) => ipcRenderer.invoke('db/get-bulletin', id),
  upsertBulletin: (upsertBulletinInput: UpsertBulletinInput) =>
    ipcRenderer.invoke('db/upsert-bulletin', upsertBulletinInput),
  updateBulletinIsEditing: (
    updateBulletinIsEditingInput: UpdateBulletinIsEditingInput,
  ) =>
    ipcRenderer.invoke(
      'db/update-bulletin-is-editing',
      updateBulletinIsEditingInput,
    ),
});

contextBridge.exposeInMainWorld('config', {
  getItem: () => ipcRenderer.invoke('config/get-item'),
  setItem: (key: string, value: any) =>
    ipcRenderer.invoke('config/set-item', key, value),
  getConfigPath: () => ipcRenderer.invoke('config/get-config-path'),
});

contextBridge.exposeInMainWorld('env', {
  getEnv: () => ipcRenderer.invoke('env/get-env'),
  getEnvPath: () => ipcRenderer.invoke('env/get-env-path'),
});

export type ElectronHandler = typeof electronHandler;
