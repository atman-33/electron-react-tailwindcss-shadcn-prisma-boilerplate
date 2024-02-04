import { CreateDummyInput } from '@api/dummies/dto/create-dummy-input.dto';
import { Dummy } from '@prisma/client';
import { ElectronHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    db: {
      loadDummies: () => Promise<Dummy[]>;
      createDummy: (createDummyInput: CreateDummyInput) => Promise<Dummy>;
    };
  }
}

export {};
