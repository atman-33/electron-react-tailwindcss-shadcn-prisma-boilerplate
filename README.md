## 参考URL

<https://qiita.com/udayaan/items/2a7c8fd0771d4d995b69>

## 開発環境セットアップ

### 1. Node.js をインストール  

<https://nodejs.org/en>

### 2. パッケージをインストール

```bash
npm i
```

### 3. 開発モードで実行

```bash
npm run start
```

## パッケージを配布

### 1. パッケージング

```bash
npm run package
```

## フォルダ構成

```text
/src              : ディレクトリにメインの処理
  │
  ├ /src/main     : にはElectronやnode.js周りの処理
  │
  ├ /src/renderer : 内にReactのコンポーネント

/assets           : 内には画像やアイコンなどを配置

/release          : 内にはビルドしたアプリが保存
```

___  

<br />

# Electron React Boilerplate

<img src=".erb/img/erb-banner.svg" width="100%" />

<br>

<p>
  Electron React Boilerplate uses <a href="https://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/reactjs/react-router">React Router</a>, <a href="https://webpack.js.org/">Webpack</a> and <a href="https://www.npmjs.com/package/react-refresh">React Fast Refresh</a>.
</p>

<br>

<div align="center">

[![Build Status][github-actions-status]][github-actions-url]
[![Github Tag][github-tag-image]][github-tag-url]
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/Fjy3vfgy5q)

[![OpenCollective](https://opencollective.com/electron-react-boilerplate-594/backers/badge.svg)](#backers)
[![OpenCollective](https://opencollective.com/electron-react-boilerplate-594/sponsors/badge.svg)](#sponsors)
[![StackOverflow][stackoverflow-img]][stackoverflow-url]

</div>

## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name
cd your-project-name
npm install
```

**Having issues installing? See our [debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## Docs

See our [docs and guides here](https://electron-react-boilerplate.js.org/docs/installation)

## Community

Join our Discord: <https://discord.gg/Fjy3vfgy5q>
