# .env セットアップ

electron ビルド時に、exeファイルと同階層の`.env`ファイルを参照するようにする。

## 導入ステップ

### 1. envモジュール（ファイルパス指定）を作成

`src\main\lib\env\index.ts`

e.g.  

```ts
import * as dotenv from 'dotenv';
import { app } from 'electron';
import path from 'path';

export type EnvType = {
  DATABASE_URL: string;
};

const envPath =
  process.env.NODE_ENV === 'development'
    ? `${process.cwd()}/.env`
    : `${path.dirname(app.getPath('exe'))}/.env`;

dotenv.config({ path: envPath });

const env: EnvType = {
  DATABASE_URL: process.env['DATABASE_URL'] ?? '',
};

export { env, envPath };
```

### 2. メインプロセス側に処理を追加

- `main.ts`: envモジュールからenvのデータを取得する処理を追加
- `preload.ts`: レンダラープロセス用のAPIを追加
  
### 3. レンダラープロセス側に処理を追加

- `preload.d.ts`: メインプロセスの処理を呼び出すインターフェースを追加

### 4. レンダラープロセス側の利用例

e.g.  

```ts
  const handleGetEnvButtonClick = async () => {
    const env = await window.env.getEnv();
    setEnvData(`DATABASE_URL: ${env.DATABASE_URL}`);
  };
```

### 5. ビルド時に`.env`を出力する設定を追加

`package.json`

```json
    "extraResources": [
      ...
      {
        "from": "./.env",
        "to": "../.env"
      }
    ],
    ...
```

> ビルド後のアプリと同じフォルダに`.env`を配置したいため、`../`としている。