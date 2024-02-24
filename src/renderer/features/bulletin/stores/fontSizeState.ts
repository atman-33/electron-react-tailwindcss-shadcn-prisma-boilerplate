import { atom, selector, useRecoilValue } from 'recoil';

export const fontSizeState = atom<string>({
  key: 'bulletin/fontSizeState',
  default: selector({
    key: 'bulletin/fontSizeState/default',
    get: async () => {
      return (await window.config.getItem('fontSize')) ?? '14px';
    },
  }),
});

const fontSizeSelector = selector({
  key: 'bulletin/fontSizeSelector',
  get: ({ get }) => get(fontSizeState),
});

export const fontSizeSelectors = {
  useGetFontSize: () => useRecoilValue(fontSizeSelector),
};
