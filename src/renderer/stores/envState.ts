import { EnvType } from '@shared/types';
import { atom, selector, useRecoilValue } from 'recoil';

export const envState = atom<EnvType>({
  key: 'envState',
  default: selector({
    key: 'envState/default',
    get: async () => {
      return await window.env.getEnv();
    },
  }),
});

const envSelector = selector({
  key: 'envSelector',
  get: ({ get }) => {
    return get(envState);
  },
});

export const envSelectors = {
  useGetEnv: () => useRecoilValue(envSelector),
};
