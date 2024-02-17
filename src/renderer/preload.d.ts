import { CreateDummyInput, UpdateDummyInput } from '@shared/lib/dto';
import { EnvType } from '@shared/lib/env';
import { Dummy } from '@shared/lib/models';

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
      getConfigPath: () => Promise<string>;
    };

    env: {
      getEnv: () => Promise<EnvType>;
      getEnvPath: () => Promise<string>;
    };
  }
}

export {};
