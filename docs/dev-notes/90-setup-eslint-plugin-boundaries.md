# eslint-plugin-boundaries を導入

このプラグインで、renderer プロセスから main プロセスへの参照を禁止させる。

## 導入ステップ

### 1. パッケージをインストール

```bash
npm i --save-dev eslint-plugin-boundaries
```

### 2. eslintルールを変更

`.eslintrc.js`

plugin を追加  

```js
-  plugins: ['@typescript-eslint'],
+  plugins: ['@typescript-eslint', 'boundaries'],

```

settings に、要素（フォルダのグループ）を追加  

```js
  settings: {
    'boundaries/elements': [
      {
        type: 'main',
        pattern: 'src/main',
      },
      {
        type: 'renderer',
        pattern: 'src/renderer',
      },
      {
        type: 'shared',
        pattern: 'src/shared',
      },
    ],
  },
```

rule に、要素間のアクセス制限を追加  

```js
  rules: {
  element-types': [
      2,
      {
        default: 'disallow',
        rules: [
          {
            from: ['main'],
            allow: ['main', 'shared'],
          },
          {
            from: ['renderer'],
            allow: ['renderer', 'shared'],
          },
          {
            from: ['shared'],
            allow: ['shared', 'main'],
          },
        ],
      },
    ],
  },
```
