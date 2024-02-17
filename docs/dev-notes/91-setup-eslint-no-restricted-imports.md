# no-restricted-imports を設定

mainプロセスでは、@を使ったエイリアス絶対パスがエラーとなる。  
（node_module のファイルはOK）

そのため、`@main`のmainプロセスを参照するimoprtを禁止する。


## 実装ステップ

### 1. eslint に追加設定

`.eslintrc.js`

e.g.  

```js
  overrides: [
    {
      files: ['src/main/**/*.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: ['@main/lib/data-access-db/generated'],
          },
        ],
      },
    },
  ],
```