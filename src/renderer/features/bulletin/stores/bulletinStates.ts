import { Bulletin } from '@shared/lib/models';
import { atomFamily } from 'recoil';

/**
 * 連絡板State
 */
const bulletinState = atomFamily<Bulletin | null, number>({
  key: 'bulletin/bulletinState',
  default: null,
});

export { bulletinState };
