# Prisma セットアップ

## 参考URL

https://www.prisma.io/docs/getting-started/quickstart

https://zenn.dev/forest1040/articles/7f6794d8651fd4

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

1. main ファイルに、「Prisma初期化」と「DBクローズ」を追加

`src\main\main.ts`  

```ts
// prisma初期化
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

...

/**
 * DBコネクションをクローズ
 */
const closeDB = async () => {
  await prisma.$disconnect();
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

2. service ファイルを追加

e.g.  

`src\main\api\dummies\dummies.service.ts`

```ts
import { Dummy, PrismaClient } from '@main/lib/data-access-db/generated';

const getDummies = async (prisma: PrismaClient): Promise<Dummy[]> => {
  return await prisma.dummy.findMany();
};

const createDummy = async (
  prisma: PrismaClient,
  dummy: Dummy,
): Promise<Dummy> => {
  return await prisma.dummy.create({
    data: dummy,
  });
};

export { createDummy, getDummies };
```

3. main ファイルに、IPC通信用の処理を追加

`src\main\main.ts`  

```ts
ipcMain.handle('db-load-dummies', (event, message: any) => {
  console.log(message);
  return getDummies(prisma);
});

ipcMain.handle('db-create-dummy', (event, dummy: any) => {
  console.log(dummy);
  return createDummy(prisma, dummy);
});
```

4. preload ファイルに、IPC通信用の処理を追加

`src\main\preload.ts`  

```ts
contextBridge.exposeInMainWorld('db', {
  loadDummies: () => ipcRenderer.invoke('db-load-dummies'),
  createDummy: (dummy: Dummy) => ipcRenderer.invoke('db-create-dummy', dummy),
});
```

### 6. レンダープロセス側にDBアクセス処理を追加

1. preload.d.ts に db アクセスの処理を追加

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

2. API処理用のカスタムフックを作成

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

3. カスタムフックを利用

e.g.  

```tsx
  const { getDummies } = useDummies();

  const handleButtonClick = async () => {
    console.log('ボタンをクリックしました。');
    setDummies(await getDummies());
  };
```