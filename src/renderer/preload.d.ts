import { CreateDummyInput } from '@main/api/dummies/dto/create-dummy-input.dto';
import { UpdateDummyInput } from '@main/api/dummies/dto/update-dummy-input.dto';
import { Dummy } from '@main/lib/data-access-db/generated';
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
