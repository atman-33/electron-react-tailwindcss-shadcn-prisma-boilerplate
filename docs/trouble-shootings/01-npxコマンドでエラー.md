# npx コマンドでエラーが発生

## 現象

e.g. 

```bash
PS C:\Repos\bulletin-board-electron> npx shadcn-ui@latest add button
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\gpbjk\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\gpbjk\AppData\Roaming\npm'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! A complete log of this run can be found in: C:\Users\gpbjk\AppData\Local\npm-cache\_logs\2024-02-04T07_03_06_508Z-debug-0.log
```

## 解決策

C:\Users\user\AppData\Roaming に"npm"というフォルダを作る。