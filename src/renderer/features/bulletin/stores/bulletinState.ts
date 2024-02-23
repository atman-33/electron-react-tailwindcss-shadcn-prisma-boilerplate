import { Bulletin } from '@shared/lib/models';
import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  useRecoilValue,
} from 'recoil';

/**
 * 初期データ。bulletinIdsState と bulletinsState の初期データを格納するための状態。
 * 初期データ格納以外では利用しない。
 */
const initialDataState = atom<Bulletin[] | null>({
  key: 'bulletin/initialDataState',
  default: selector({
    key: 'bulletin/initialDataState/default',
    get: async () => {
      let res = await window.db.getBulletin(0);
      console.log('res', res);

      // id=0 のデータが無ければ作成
      if (!res) {
        res = await window.db.upsertBulletin({
          id: 0,
          message: 'Hello bulletin world!',
          isEditing: 0,
          editStartedAt: new Date(),
        });
      }

      return await window.db.getBulletins();
    },
  }),
});

/**
 * bulletin ID のリスト
 */
export const bulletinIdsState = atom<number[]>({
  key: 'bulletin/bulletinIdsState',
  default: selector({
    key: 'bulletin/bulletinIdsState/default',
    get: ({ get }) => {
      return get(initialDataState)?.map((d) => d.id) ?? [];
    },
  }),
});

/**
 * bulletin ID に対応する連絡板。データ更新等は、この状態を変更する必要がある。
 */
export const bulletinsState = atomFamily<Bulletin | null, number>({
  key: 'bulletin/bulletinsState',
  default: selectorFamily({
    key: 'bulletin/bulletinsState/default',
    get:
      (id: number) =>
      ({ get }) => {
        return get(initialDataState)?.find((d) => d.id === id) ?? null;
      },
  }),
});

const bulletinsSelector = selector({
  key: 'bulletin/bulletinsSelector',
  get: ({ get }) => {
    return get(bulletinIdsState).map((id) => get(bulletinsState(id)));
  },
});

const bulletinSelector = selectorFamily({
  key: 'bulletin/bulletinSelector',
  get:
    (id: number) =>
    ({ get }) => {
      return get(bulletinsState(id));
    },
});

/**
 * bulletin に対してデータを取得するセレクターを集約したオブジェクト（Read系）
 */
export const bulletinSelectors = {
  useGetBulletins: () => useRecoilValue(bulletinsSelector),
  useGetBulletin: (id: number) => useRecoilValue(bulletinSelector(id)),
};
