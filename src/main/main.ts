/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import { BrowserWindow, app, ipcMain, shell } from 'electron';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import path from 'path';

import { bulletinsService } from './api/bulletins/bulletins.service';
import { UpdateBulletinIsEditingInput } from './api/bulletins/dto/update-bulletin-is-editing-input.dto';
import { UpsertBulletinInput } from './api/bulletins/dto/upsert-bulletin-input.dto';
import { CreateDummyInput } from './api/dummies/dto/create-dummy-input.dto';
import { UpdateDummyInput } from './api/dummies/dto/update-dummy-input.dto';
import { dummiesService } from './api/dummies/dummies.service';
import { config } from './lib/config';
import { env, envPath } from './lib/env';
import { jsonDB } from './lib/node-json-db';
import { closeDB } from './lib/prisma-client';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload,
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    x: config.store.get('x'),
    y: config.store.get('y'),
    width: config.store.get('width'),
    height: config.store.get('height'),
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  // 常に最前面表示モード
  console.log(`SHOW_ON_TOP: ${env.SHOW_ON_TOP}`);
  if (env.SHOW_ON_TOP) {
    console.log('SHOW_ON_TOP: true');
    mainWindow.setAlwaysOnTop(true, 'screen-saver');
  }

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  // ウィンドウのサイズを保存
  mainWindow.on('close', () => {
    const { x, y, width, height } = mainWindow?.getBounds() || {};
    config.store.set({ x, y, width, height });
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */
app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
    // DBコネクションをクローズ
    closeDB();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// IPC通信用の処理
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

ipcMain.handle('db/get-dummies', (event) => {
  return dummiesService.getDummies();
});

ipcMain.handle(
  'db/create-dummy',
  async (event, createDummyInput: CreateDummyInput) => {
    // TODO: テスト用のデータを追加。後で削除すること。
    await jsonDB.push('/dummies', []);
    return dummiesService.createDummy(createDummyInput);
  },
);

ipcMain.handle(
  'db/update-dummy',
  (event, updateDummyInput: UpdateDummyInput) => {
    return dummiesService.updateDummy(updateDummyInput);
  },
);

ipcMain.handle('db/delete-dummies', (event) => {
  return dummiesService.deleteDummies();
});

ipcMain.handle('config/get-item', (event, key: string) => {
  console.log('config/get-item: ', key);
  return config.store.get(key);
});

ipcMain.handle('config/get-config-path', (event, key: string) => {
  return config.store.path;
});

ipcMain.handle('config/set-item', (event, key: string, value: any) => {
  return config.store.set(key, value);
});

ipcMain.handle('env/get-env', (event) => {
  return env;
});

ipcMain.handle('env/get-env-path', (event) => {
  return envPath;
});

ipcMain.handle('db/get-bulletins', (event) => {
  console.log('main ---> get-bulletins');
  return bulletinsService.getBulletins();
});

ipcMain.handle('db/get-bulletin', (event, id: number) => {
  console.log('main ---> get-bulletin');
  return bulletinsService.getBulletin(id);
});

ipcMain.handle(
  'db/upsert-bulletin',
  (event, upsertBulletinInput: UpsertBulletinInput) => {
    console.log('main ---> upsert-bulletin');
    return bulletinsService.upsertBulletin(upsertBulletinInput);
  },
);

ipcMain.handle(
  'db/update-bulletin-is-editing',
  (event, updateBulletinIsEditingInput: UpdateBulletinIsEditingInput) => {
    console.log('main ---> update-bulletin-is-editing');
    return bulletinsService.updateBulletinIsEditing(
      updateBulletinIsEditingInput,
    );
  },
);
