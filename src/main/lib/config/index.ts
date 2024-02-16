/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
import { app } from 'electron';
import ElectronStore from 'electron-store';
import path from 'path';

/**
 * Electron Storeを使用して設定値を取得・保存する
 */
class ConfigStore {
  private store: ElectronStore<any>;

  constructor() {
    this.store = new ElectronStore<any>({
      cwd: this.getConfigFolderPath(),
      name: 'config',
      fileExtension: 'json',
    });
  }

  public getItem(key: string): any {
    return this.store.get(key);
  }

  public setItem(key: string, value: any): any {
    return this.store.set(key, value);
  }

  public getConfigPath(): string {
    return this.store.path;
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

export { ConfigStore };
