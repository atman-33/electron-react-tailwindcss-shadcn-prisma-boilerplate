import { ConfigType } from '@main/lib/config';

export const useConfig = () => {
  const getConfig = async (): Promise<ConfigType> => {
    return await window.config.getConfig();
  };

  return { getConfig };
};
