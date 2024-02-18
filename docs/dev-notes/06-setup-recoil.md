# Recoil セットアップ


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