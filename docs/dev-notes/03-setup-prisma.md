# Prisma セットアップ

## 参考URL

<https://www.prisma.io/docs/getting-started/quickstart>

<https://zenn.dev/forest1040/articles/7f6794d8651fd4>

<https://blog.shgnkn.io/impression-of-prisma/>

## 導入ステップ

### 1. パッケージをインストール

```bash
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
```

### 2. モデル作成

`schme.prisma` ファイルにモデルを追加

> `prisma-client`の出力先を指定する場合は下記を参考に実施

generatedファイル生成場所を指定

`prisma\schema.prisma`  

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../src/main/lib/data-access-db/generated"
}
```

### 3. マイグレーション

スキーマをDBテーブルに反映  

```bash
npx prisma migrate dev --name init
```

### 4. PrismaClient生成

```bash
npx prisma generate
```

### 5. メインプロセス側にDBアクセス処理を追加

#### (1) PrismaClient 生成ファイルを作成

`src\main\lib\prisma-client\index.ts`

```ts
import { PrismaClient } from '../data-access-db/generated';
import { env } from '../env';

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient;
}

if (!global.prisma) {
  global.prisma = new PrismaClient({
    datasources: {
      db: {
        url: env.DATABASE_URL,
      },
    },
  });
}

export default global.prisma;
```

#### (2) main ファイルに、「DBクローズ」を追加

`src\main\main.ts`  

```ts
import { prismaClient } from './lib/prisma-client';
...

/**
 * DBコネクションをクローズ
 */
const closeDB = async () => {
  await prismaClient.$disconnect();
};

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
    // DBコネクションをクローズ
    closeDB();
  }
});
```

#### (3) service ファイルを追加

e.g.  

`src\main\api\dummies\dummies.service.ts`

```ts
import { Dummy } from '../../lib/data-access-db/generated';
import { prismaClient } from '../../lib/prisma-client';
import { CreateDummyInput } from './dto/create-dummy-input.dto';

const getDummies = async (): Promise<Dummy[]> => {
  return await prismaClient.dummy.findMany();
};

const createDummy = async (
  createDummyInput: CreateDummyInput,
): Promise<Dummy> => {
  return await prismaClient.dummy.create({
    data: createDummyInput,
  });
};

export { createDummy, getDummies };

```

#### (4) main ファイルに、IPC通信用の処理を追加

`src\main\main.ts`  

```ts
ipcMain.handle('db/load-dummies', (event) => {
  return getDummies();
});

ipcMain.handle(
  'db/create-dummy',
  (event, createDummyInput: CreateDummyInput) => {
    return createDummy(createDummyInput);
  },
);
```

#### (5) preload ファイルに、IPC通信用の処理を追加

`src\main\preload.ts`  

```ts
contextBridge.exposeInMainWorld('db', {
  loadDummies: () => ipcRenderer.invoke('db/load-dummies'),
  createDummy: (dummy: Dummy) => ipcRenderer.invoke('db/create-dummy', dummy),
});
```

### 6. レンダープロセス側にDBアクセス処理を追加

#### (1) preload.d.ts に db アクセスの処理を追加

`src\renderer\preload.d.ts`

e.g.  

```ts
  interface Window {
    electron: ElectronHandler;
    db: {
      loadDummies: () => Promise<Dummy[]>;
      createDummy: (dummy: Dummy) => Promise<Dummy>;
    };
  }
```

#### (2) API処理用のカスタムフックを作成

`src\renderer\features\dummy\hooks\useDummies.ts`

```ts
import { CreateDummyInput } from '@api/dummies/dto/create-dummy-input.dto';
import { Dummy } from '@main/lib/data-access-db/generated';

export const useDummies = () => {
  const getDummies = async (): Promise<Dummy[]> => {
    try {
      return await window.db.loadDummies();
    } catch (error) {
      throw error;
    }
  };

  const createDummy = async (
    createDummyInput: CreateDummyInput,
  ): Promise<Dummy> => {
    try {
      return await window.db.createDummy(createDummyInput);
    } catch (error) {
      throw error;
    }
  };

  return { getDummies, createDummy };
};
```

#### (3) カスタムフックを利用

e.g.  

```tsx
  const { getDummies } = useDummies();

  const handleButtonClick = async () => {
    console.log('ボタンをクリックしました。');
    setDummies(await getDummies());
  };
```

### 7. prisma を build 時に出力するように設定

`package.json`

```json
    "extraResources": [
      ...,
      {
        "from": "./src/main/lib/data-access-db/generated/query_engine-windows.dll.node",
        "to": "./.prisma/client/query_engine-windows.dll.node"
      },
      ...
```

> `package`コマンド時に、`query_engine-windows.dll.node`を出力すること。
> そうしないと、DB操作時にエラーが発生する。
