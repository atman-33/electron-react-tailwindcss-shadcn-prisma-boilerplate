import { CreateDummyInput } from '@main/api/dummies/dto/create-dummy-input.dto';
import { Dummy } from '@main/lib/data-access-db/generated';
import { ElectronHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    db: {
      loadDummies: () => Promise<Dummy[]>;
      createDummy: (createDummyInput: CreateDummyInput) => Promise<Dummy>;
    };
    config: {
      getItem: (key: string) => Promise<any>;
      setItem: (key: string, value: any) => Promise<void>;
    };
  }
}

export {};
