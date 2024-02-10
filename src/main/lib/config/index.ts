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
      cwd: this.getConfigFilePath(),
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

  private getConfigFilePath(): string {
    let configFilePath;
    console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);

    // 開発環境と本番環境でconfigファイルの場所を切り替え
    if (process.env.NODE_ENV === 'development') {
      // 開発環境の場合は、このファイルのディレクトリにあるconfig.jsonを参照
      configFilePath = path.join(__dirname);
    } else {
      // 本番環境の場合は、アプリケーションの実行ファイルが格納されているディレクトリにあるconfig.jsonを参照
      const appDir = app.getPath('exe');
      const exeDir = path.dirname(appDir);
      configFilePath = path.join(exeDir, 'config');
    }
    console.log(`configFilePath: ${configFilePath}`);
    return configFilePath;
  }
}

export { ConfigStore };
