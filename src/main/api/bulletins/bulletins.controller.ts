/* eslint-disable @typescript-eslint/no-unused-vars */
import { IpcMain, IpcMainInvokeEvent } from 'electron';
import prismaClient from '../../lib/prisma-client';
import { BulletinsService } from './bulletins.service';
import { UpdateBulletinIsEditingInput } from './dto/update-bulletin-is-editing-input.dto';
import { UpsertBulletinInput } from './dto/upsert-bulletin-input.dto';

class BulletinsController {
  ipcMain: IpcMain;

  bulletinsService: BulletinsService;

  constructor(ipcMain: IpcMain) {
    this.ipcMain = ipcMain;
    this.bulletinsService = new BulletinsService(prismaClient);
  }

  registerHandlers() {
    this.ipcMain.handle('db/bulletins/get-bulletins', this.handleGetBulletins);
    this.ipcMain.handle('db/bulletins/get-bulletin', this.handleGetBulletin);
    this.ipcMain.handle(
      'db/bulletins/upsert-bulletin',
      this.handleUpsertBulletin,
    );
    this.ipcMain.handle(
      'db/bulletins/update-bulletin-is-editing',
      this.handleUpdateBulletinIsEditing,
    );
  }

  handleGetBulletins = (event: IpcMainInvokeEvent) => {
    return this.bulletinsService.getBulletins();
  };

  handleGetBulletin = (event: IpcMainInvokeEvent, id: number) => {
    return this.bulletinsService.getBulletin(id);
  };

  handleUpsertBulletin = (
    event: IpcMainInvokeEvent,
    upsertBulletinInput: UpsertBulletinInput,
  ) => {
    return this.bulletinsService.upsertBulletin(upsertBulletinInput);
  };

  handleUpdateBulletinIsEditing = (
    event: IpcMainInvokeEvent,
    updateBulletinIsEditingInput: UpdateBulletinIsEditingInput,
  ) => {
    return this.bulletinsService.updateBulletinIsEditing(
      updateBulletinIsEditingInput,
    );
  };
}

export { BulletinsController };
