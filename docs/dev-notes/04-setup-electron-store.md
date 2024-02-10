# electron-store セットアップ

## 参考URL

<https://maku.blog/p/ev6env5/>  

<https://blog.katsubemakito.net/nodejs/electron/electron-store#%E4%BF%9D%E5%AD%98%E5%85%88%E3%82%84%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%90%8D%E3%82%92%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B>  

<https://pystyle.info/electron-tutorial-load-config-file/>  

## 導入ステップ

### 1. パッケージをインストール

```bash
npm i electron-store
```

### 2. メインプロセスにConfigクラスを作成

`src\main\lib\config\index.ts`  

```ts
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
  ...
```

### 3. メインプロセスの main.ts に処理を追加

`src\main\main.ts`  

```ts
ipcMain.handle('config-get-item', (event, key: string) => {
  const config = new ConfigStore();
  return config.getItem(key);
});

ipcMain.handle('config-set-item', (event, key: string, value: any) => {
  const config = new ConfigStore();
  return config.setItem(key, value);
});
```

### 4. メインプロセスの preload.ts にAPIを追加

`src\main\preload.ts`  

```ts
contextBridge.exposeInMainWorld('config', {
  getItem: () => ipcRenderer.invoke('config-get-item'),
  setItem: (key: string, value: any) =>
    ipcRenderer.invoke('config-set-item', key, value),
});
```

### 5. レンダラー側に、API処理のインターフェースを追加

`src\renderer\preload.d.ts`  

```ts
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    ...
    config: {
      getItem: (key: string) => Promise<any>;
      setItem: (key: string, value: any) => Promise<void>;
    };
  }
}
```
