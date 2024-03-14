import { Bulletin } from '@shared/api/models';
import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  useRecoilValue,
} from 'recoil';
import { BulletinIds } from '../types';

/**
 * 初期データ。bulletinIdsState と bulletinsState の初期データを格納するための状態。
 * 初期データ格納以外では利用しない。
 */
const initialDataState = atom<Bulletin[] | null>({
  key: 'bulletin/initialDataState',
  default: selector({
    key: 'bulletin/initialDataState/default',
    get: async () => {
      try {
        let res = await window.dbBulletins.getBulletin(BulletinIds.Common);
        // console.log('res', res);

        // id=BulletinIds.Common のデータが無ければ作成
        if (!res) {
          res = await window.dbBulletins.upsertBulletin({
            id: BulletinIds.Common,
            message: 'Hello bulletin world!',
            isEditing: 0,
            editStartedAt: new Date(),
          });
        }
        return await window.dbBulletins.getBulletins();
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
      return null;
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
 * 編集開始からの経過時間を返す。単位は秒。
 */
const durationSinceEditStartedSelector = selectorFamily({
  key: 'bulletin/durationSinceEditStartedSelector',
  get:
    (id: number) =>
    ({ get }) => {
      const bulletin = get(bulletinSelector(id));
      if (!bulletin) return null;
      const duration =
        new Date().getTime() - new Date(bulletin.editStartedAt).getTime();
      return duration / 1000;
    },
});

/**
 * bulletin に対してデータを取得するセレクターを集約したオブジェクト（Read系）
 */
export const bulletinSelectors = {
  useGetBulletins: () => useRecoilValue(bulletinsSelector),
  useGetBulletin: (id: number) => useRecoilValue(bulletinSelector(id)),
  useGetDurationSinceEditStarted: (id: number) =>
    useRecoilValue(durationSinceEditStartedSelector(id)),
};
