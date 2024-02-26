# Prisma Engine がダウンロードできない

`npx prisma generate`実行後のエラーメッセージ例

```bash
Downloading Prisma engines for Node-API for windows [ ] 0%Error: request to
```

原因として、Proxy が設定されていない可能性有り。

## 対処方法

Prisma デバッグ ON  
```powershell
$env:DEBUG="*"
```

> 環境変数にDEBUGを設定した場合、prism コマンド実行時に詳細が表示される。

Prisma 設定環境変数確認  
```powershell
npx prisma debug
```

Proxy 設定  
```powershell
$env:http_proxy="利用しているProxyのURL"
```