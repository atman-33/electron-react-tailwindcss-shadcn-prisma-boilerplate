# TailwindCSS セットアップ（Electron向け）

## 参考URL

<https://zenn.dev/helloyuki/scraps/22320af3cb32fb>

<https://blog.saeloun.com/2023/02/24/integrate-tailwind-css-with-electron/>

<https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/3552>

## 導入ステップ

### 1. パッケージをインストール

```bash
npm install -D tailwindcss postcss autoprefixer postcss-loader
npx tailwindcss init
```

### 2. `postcss.config.js`　を設定

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. `tailwind.config.js` を設定

```js
/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/{renderer,components}/**/*.{js,jsx,ts,tsx,ejs}'],
};
```

### 4. webpack.config を変更

`.erb\configs\webpack.config.renderer.dev.ts`

module > rules > `postcss-loader` を追加

```ts
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
        exclude: /\.module\.s?(c|a)ss$/,
      },

```

`.erb\configs\webpack.config.renderer.prod.ts`

module > rules > `postcss-loader` を追加

```ts
      {
        test: /\.s?(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
        exclude: /\.module\.s?(c|a)ss$/,
      },
```

### 5. App.css に tailwindcss を追加

`src\renderer\App.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## その他

クラス名が自動ソートされるように、`prettier-plugin-tailwindcss`を導入を推奨  

参考URL  
<https://tailwindcss.com/blog/automatic-class-sorting-with-prettier>

- パッケージをインストール  

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

- prettier にプラグインを追加

`package.json`

```json
  ...,
  "prettier": {
    "singleQuote": true,
    "overrides": [
      {
        "files": [
          ".prettierrc",
          ".eslintrc"
        ],
        "options": {
          "parser": "json"
        }
      }
    ],
    "plugins": [
      "prettier-plugin-tailwindcss"
    ]
  },
  ...
```