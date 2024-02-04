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

### 3. マイグレーション

```bash
npx prisma migrate dev --name init
```

### 4. メインプロセス側にDBアクセス処理を追加

1. main ファイルに、「Prisma初期化」と「DBクローズ」を追加

`src\main\main.ts`  

```ts
// prisma初期化
const prisma = new PrismaClient();

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
import { Dummy, PrismaClient } from '@prisma/client';

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
ipcMain.handle('load-dummies', (event, message: any) => {
  console.log(message);
  return getDummies(prisma);
});

ipcMain.handle('create-dummy', (event, dummy: any) => {
  console.log(dummy);
  return createDummy(prisma, dummy);
});
```

### 5. レンダープロセス側にDBアクセス処理を追加

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

`src\main\api\dummies\dummies.service.ts`

```ts
import { Dummy, PrismaClient } from '@prisma/client';

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

3. カスタムフックを利用

e.g.  

```tsx
  const { getDummies } = useDummies();

  const handleButtonClick = async () => {
    console.log('ボタンをクリックしました。');
    setDummies(await getDummies());
  };
```