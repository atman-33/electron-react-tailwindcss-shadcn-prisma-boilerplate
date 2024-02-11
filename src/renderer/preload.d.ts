import {
  CreateDummyInput,
  UpdateDummyInput,
} from '@shared/lib/api/dummies/dto';
import { Dummy } from '@shared/lib/api/dummies/models';
// eslint-disable-next-line boundaries/element-types
import { ElectronHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    db: {
      getDummies: () => Promise<Dummy[]>;
      createDummy: (createDummyInput: CreateDummyInput) => Promise<Dummy>;
      updateDummy: (updateDummyInput: UpdateDummyInput) => Promise<Dummy>;
      deleteDummies: () => Promise<void>;
    };
    config: {
      getItem: (key: string) => Promise<any>;
      setItem: (key: string, value: any) => Promise<void>;
    };
  }
}

export {};
