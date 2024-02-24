import {
  CreateDummyInput,
  UpdateBulletinIsEditingInput,
  UpdateDummyInput,
  UpsertBulletinInput,
} from '@shared/api/dto';
import { Bulletin, Dummy } from '@shared/api/models';
import { EnvType } from '@shared/types';

// eslint-disable-next-line boundaries/element-types
import { ElectronHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    db: {
      // Dummies
      getDummies: () => Promise<Dummy[]>;
      createDummy: (createDummyInput: CreateDummyInput) => Promise<Dummy>;
      updateDummy: (updateDummyInput: UpdateDummyInput) => Promise<Dummy>;
      deleteDummies: () => Promise<void>;
      // Bulletins
      getBulletins: () => Promise<Bulletin[] | null>;
      getBulletin: (id: number) => Promise<Bulletin | null>;
      upsertBulletin: (
        upsertBulletinInput: UpsertBulletinInput,
      ) => Promise<Bulletin>;
      updateBulletinIsEditing: (
        updateBulletinIsEditingInput: UpdateBulletinIsEditingInput,
      ) => Promise<Bulletin>;
    };
    config: {
      getItem: (key: string) => Promise<any>;
      setItem: (key: string, value: any) => Promise<void>;
      getConfigPath: () => Promise<string>;
    };

    env: {
      getEnv: () => Promise<EnvType>;
      getEnvPath: () => Promise<string>;
    };
  }
}

export {};
