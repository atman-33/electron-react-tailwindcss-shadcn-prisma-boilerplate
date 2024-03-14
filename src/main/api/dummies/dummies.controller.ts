/* eslint-disable @typescript-eslint/no-unused-vars */
import { IpcMain, IpcMainInvokeEvent } from 'electron';
import prismaClient from '../../lib/prisma-client';
import { CreateDummyInput } from './dto/create-dummy-input.dto';
import { UpdateDummyInput } from './dto/update-dummy-input.dto';
import { DummiesService } from './dummies.service';

class DummiesController {
  ipcMain: IpcMain;

  dummiesService: DummiesService;

  constructor(ipcMain: IpcMain) {
    this.ipcMain = ipcMain;
    this.dummiesService = new DummiesService(prismaClient);
  }

  registerHandlers() {
    this.ipcMain.handle('db/dummies/get-dummies', this.handleGetDummies);
    this.ipcMain.handle('db/dummies/create-dummy', this.handleCreateDummy);
    this.ipcMain.handle('db/dummies/update-dummy', this.handleUpdateDummy);
    this.ipcMain.handle('db/dummies/delete-dummies', this.handleDeleteDummies);
  }

  handleGetDummies = (event: IpcMainInvokeEvent) => {
    return this.dummiesService.getDummies();
  };

  handleCreateDummy = (
    event: IpcMainInvokeEvent,
    createDummyInput: CreateDummyInput,
  ) => {
    return this.dummiesService.createDummy(createDummyInput);
  };

  handleUpdateDummy = (
    event: IpcMainInvokeEvent,
    updateDummyInput: UpdateDummyInput,
  ) => {
    return this.dummiesService.updateDummy(updateDummyInput);
  };

  handleDeleteDummies = (event: IpcMainInvokeEvent) => {
    return this.dummiesService.deleteDummies();
  };
}

export { DummiesController };
