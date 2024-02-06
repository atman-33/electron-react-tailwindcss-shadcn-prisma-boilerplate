/* eslint-disable lines-between-class-members */
import { app } from 'electron';
import ElectronStore from 'electron-store';
import path from 'path';

// 各設定値の型
type Type = {
  dummy: string | undefined;
  dbPath: string | undefined;
};

// 設定値の取得と保存を行うためのクラス
export class Config {
  private store: ElectronStore<Type>;

  constructor() {
    // アプリケーションの実行ファイルが格納されているディレクトリを取得
    const appDir = app.getPath('exe');
    const exeDir = path.dirname(appDir);

    // configファイルのパスを生成
    const configFilePath = path.join(exeDir, 'config');
    console.log(configFilePath);

    // TODO: 開発環境と本番環境で、config.json のフォルダを切り替える
    this.store = new ElectronStore<Type>({
      cwd: configFilePath,
      name: 'config',
      fileExtension: 'json',
    });
  }

  public getItem(key: string): any {
    this.store.set('dummy', 'hello');
    return this.store.get(key);
  }

  public setItem(key: string, value: any): any {
    return this.store.set(key, value);
  }
}
