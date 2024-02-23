import { UpsertBulletinInput } from '@shared/lib/dto';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { bulletinsState } from '../stores/bulletinState';

/**
 * useXxxDispatcher は、recoil に対して、データを追加/更新/削除（Write系）するための関数を返す。
 * @returns
 */
const useBulletinDispatcher = () => {
  const bulletin = useRecoilValue(bulletinsState(0));

  /**
   * 連絡板を更新する。
   */
  const upsertBulletin = useRecoilCallback(
    ({ set }) =>
      async (upsertBulletinInput: UpsertBulletinInput) => {
        const newBulletin = await window.db.upsertBulletin(upsertBulletinInput);
        set(bulletinsState(0), newBulletin);
      },
    [],
  );

  /**
   * 連絡板編集中フラグを設定する。
   * 編集中の時はisEditing=1、編集中じゃない時は0
   */
  const setIsEditing = useRecoilCallback(
    ({ set }) =>
      async (isEditing: boolean) => {
        const newBulletin = await window.db.upsertBulletin({
          id: 0,
          message: bulletin?.message ?? '',
          isEditing: isEditing ? 1 : 0,
          editStartedAt: isEditing
            ? new Date()
            : bulletin?.editStartedAt ?? new Date(),
        });
        console.log(newBulletin.editStartedAt);
        set(bulletinsState(0), newBulletin);
      },
    [bulletin],
  );

  return {
    upsertBulletin,
    setIsEditing,
  };
};

export { useBulletinDispatcher };
