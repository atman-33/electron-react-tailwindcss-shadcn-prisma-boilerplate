/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
import { app } from 'electron';
import ElectronStore from 'electron-store';
import path from 'path';
import { ConfigStoreType } from '../../types';

/**
 * Electron Storeを使用して設定値を取得・保存する
 */
class ConfigStore {
  private _store: ElectronStore<ConfigStoreType>;

  constructor() {
    this._store = new ElectronStore<any>({
      cwd: this.getConfigFolderPath(),
      name: 'config',
      fileExtension: 'json',
      defaults: {
        x: undefined,
        y: undefined,
        width: 1024,
        height: 728,
      },
    });
  }

  get store(): ElectronStore<ConfigStoreType> {
    return this._store;
  }

  private getConfigFolderPath(): string {
    // console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);

    const configFolderPath =
      process.env.NODE_ENV === 'development'
        ? path.join(__dirname)
        : path.join(path.dirname(app.getPath('exe')), 'config');

    // console.log(`configFilePath: ${configFolderPath}`);
    return configFolderPath;
  }
}

export const config = new ConfigStore();
