# Recoil セットアップ

## 参考URL

<https://zenn.dev/yamakenji24/articles/55d9f15b03eb7f>
<https://tech.spacely.co.jp/entry/2023/09/27/184625>

## 導入ステップ

### 1. パッケージをインストール

```bash
npm i recoil
```

### 2. RecoilProviderを準備

`src\renderer\components\providers\RecoilProvider.tsx`

```tsx
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

const RecoilProvider = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
```

### 3. RecoilProviderを適用

`src\renderer\App.tsx`

```tsx
export default function App() {
  return (
    <RecoilProvider>
      <Router>
        ...
      </Router>
    </RecoilProvider>
  );
}
```

### 4. useRecoilCallback の依存配列をチェック

eslint に、useRecoilCallback の依存配列をチェックするルールを追加

`.eslintrc.json`

```json
{
  "rules": {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
  }
}
