import { useRecoilCallback, useRecoilValue } from 'recoil';
import { bulletinState } from '../stores/bulletinStates';

const useBulletin = () => {
  /**
   * 連絡板State(atomFamilyのため、number=0のみ利用する。)
   */
  const bulletin = useRecoilValue(bulletinState(0));

  /**
   * 連絡板を初期化する。
   */
  const initBulletin = useRecoilCallback(
    ({ set }) =>
      async () => {
        let data = await window.db.getBulletin(0);

        if (!data) {
          data = await window.db.upsertBulletin({
            id: 0,
            message: 'initial message',
            isEditing: 0,
            editedAt: new Date(),
          });
        }

        set(bulletinState(0), data);
      },
    [],
  );

  /**
   * 連絡板編集中フラグを設定する。
   * 編集中の時はisEditing=1、編集中じゃない時は0
   */
  const setIsEditing = useRecoilCallback(({ set }) => (isEditing: boolean) => {
    set(bulletinState(0), (prev: any) => {
      return {
        ...prev,
        isEditing: isEditing ? 1 : 0,
      };
    });
  });

  return {
    bulletin,
    initBulletin,
    setIsEditing,
  };
};

export { useBulletin };
