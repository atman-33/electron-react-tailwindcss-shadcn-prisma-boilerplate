import { fontSizes } from '@/constants';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { fontSizeState } from '../stores/fontSizeState';

const useFontSizeDispatcher = () => {
  const fontSize = useRecoilValue(fontSizeState);

  const increaseFontSize = useRecoilCallback(
    ({ set }) =>
      () => {
        const index = fontSizes.indexOf(fontSize);
        // console.log('fontSize: ', fontSize);
        // console.log('index: ', index);
        if (index !== -1 && index < fontSizes.length - 1) {
          // console.log(`fontSize: ${fontSize} -> ${fontSizes[index + 1]}`);
          set(fontSizeState, fontSizes[index + 1]);
          window.config.setItem('fontSize', fontSizes[index + 1]);
        }
      },
    [fontSize],
  );

  const decreaseFontSize = useRecoilCallback(
    ({ set }) =>
      () => {
        const index = fontSizes.indexOf(fontSize);
        // console.log('fontSize: ', fontSize);
        // console.log('index: ', index);
        if (index > 0) {
          // console.log(`fontSize: ${fontSize} -> ${fontSizes[index - 1]}`);
          set(fontSizeState, fontSizes[index - 1]);
          window.config.setItem('fontSize', fontSizes[index - 1]);
        }
      },
    [fontSize],
  );

  return { increaseFontSize, decreaseFontSize };
};

export { useFontSizeDispatcher };
