/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
import { app } from 'electron';
import ElectronStore from 'electron-store';
import path from 'path';

// 各設定値の型
type ConfigType = {
  dummy: string | undefined;
  dbPath: string | undefined;
};

/**
 * Electron Storeを使用して設定値を取得・保存する
 */
class ConfigStore {
  private store: ElectronStore<ConfigType>;

  constructor() {
    this.store = new ElectronStore<ConfigType>({
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
    // 開発環境と本番環境でconfigファイルの場所を切り替える
    if (process.env.NODE_ENV === 'development') {
      // 開発環境の場合は、プロジェクトのディレクトリにあるconfig.jsonを参照
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

/**
 * 設定値を取得する
 * @returns 設定値
 */
const getConfig = (): ConfigType => {
  const configStore = new ConfigStore();
  return {
    dummy: configStore.getItem('dummy'),
    dbPath: configStore.getItem('dbPath'),
  };
};

export { ConfigStore, ConfigType, getConfig };
