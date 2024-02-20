import { UpsertBulletinInput } from '@shared/lib/dto';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { bulletinState } from '../stores/bulletinStates';

const useBulletin = () => {
  /**
   * 連絡板State(atomFamilyのため、number=0のみ利用する。)
   */
  const bulletin = useRecoilValue(bulletinState(0));

  /**
   * 連絡板を取得する。
   */
  const getBulletin = useRecoilCallback(
    ({ set }) =>
      async () => {
        let res = await window.db.getBulletin(0);

        if (!res) {
          res = await window.db.upsertBulletin({
            id: 0,
            message: 'Hello bulletin world!',
            isEditing: 0,
            editStartedAt: new Date(),
          });
        }

        set(bulletinState(0), res);
        return res;
      },
    [bulletin],
  );

  /**
   * 連絡板を更新する。
   */
  const upsertBulletin = useRecoilCallback(
    ({ set }) =>
      async (upsertBulletinInput: UpsertBulletinInput) => {
        const res = await window.db.upsertBulletin(upsertBulletinInput);
        set(bulletinState(0), res);
      },
    [bulletin],
  );

  /**
   * 連絡板編集中フラグを設定する。
   * 編集中の時はisEditing=1、編集中じゃない時は0
   */
  const setIsEditing = useRecoilCallback(
    ({ set }) =>
      async (isEditing: boolean) => {
        const res = await window.db.upsertBulletin({
          id: 0,
          message: bulletin?.message ?? '',
          isEditing: isEditing ? 1 : 0,
          editStartedAt: isEditing
            ? new Date()
            : bulletin?.editStartedAt ?? new Date(),
        });
        console.log(res.editStartedAt);
        set(bulletinState(0), (prev: any) => {
          return {
            ...prev,
            isEditing: res.isEditing,
            editStartedAt: res.editStartedAt,
          };
        });
      },
    [bulletin],
  );

  return {
    bulletin,
    getBulletin,
    upsertBulletin,
    setIsEditing,
  };
};

export { useBulletin };
