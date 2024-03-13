/* eslint-disable react/jsx-boolean-value */
import DotFlasing from '@/components/elements/DotFlashing';
import DecreaseFontSizeButton from '@/features/bulletin/components/(font-size)/DecreaseFontSizeButton';
import IncreaseFontSizeButton from '@/features/bulletin/components/(font-size)/IncreaseFontSizeButton';
import CancelButton from '@/features/bulletin/components/CancelButton';
import EditButton from '@/features/bulletin/components/EditButton';
import MessageArea from '@/features/bulletin/components/MessageArea';
import SaveButton from '@/features/bulletin/components/SaveButton';
import { useBulletinDispatcher } from '@/features/bulletin/hooks/useBulletinDispatcher';
import { bulletinSelectors } from '@/features/bulletin/stores/bulletinState';
import { BulletinIds } from '@/features/bulletin/types';
import { useBackgroundWorker } from '@/hooks/useBackgroundWorker';
import { formatDate } from '@/lib/format';
import Layout from '@/pages/_components/Layout';
import { envSelectors } from '@/stores/envState';
import { Suspense, useCallback, useEffect, useState } from 'react';

const BulletinPage = () => {
  const [message, setMessage] = useState('');
  const [updatedAt, setUpdatedAt] = useState(new Date());
  const bulletinDispatcher = useBulletinDispatcher();
  const bulletin = bulletinSelectors.useGetBulletin(BulletinIds.Common);
  const durationSinceEditStart =
    bulletinSelectors.useGetDurationSinceEditStarted(BulletinIds.Common);
  const env = envSelectors.useGetEnv();

  const {
    start: autoReloadStart,
    stop: autoReloadStop,
    error: autoReloadError,
  } = useBackgroundWorker({
    func: async () => {
      await bulletinDispatcher.reloadBulletins();
      setMessage(bulletin?.message ?? '');
      setUpdatedAt(new Date());

      // 指定時間経過したら自動で編集終了
      if (
        durationSinceEditStart &&
        durationSinceEditStart >= env.AUTO_EDIT_END_SEC
      ) {
        bulletinDispatcher.setIsEditing(false);
      }
    },
    interval: env.UPDATE_INTERVAL_SEC * 1000,
  });

  useEffect(() => {
    setMessage(bulletin?.message ?? '');
    autoReloadStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditButtonClick = useCallback(() => {
    console.log('Edit button clicked');
    bulletinDispatcher.setIsEditing(true);
    autoReloadStop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bulletin]);

  const handleSaveButtonClick = useCallback(() => {
    console.log('Save button clicked');
    bulletinDispatcher.upsertBulletin({
      id: bulletin?.id ?? BulletinIds.Common,
      message,
      isEditing: 0,
      editStartedAt: bulletin?.editStartedAt ?? new Date(),
    });
    autoReloadStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bulletin, message]);

  const handleCancelButtonClick = useCallback(() => {
    console.log('Cancel button clicked');
    setMessage(bulletin?.message ?? '');
    bulletinDispatcher.setIsEditing(false);
    autoReloadStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bulletin]);

  return (
    <Layout>
      <Suspense
        fallback={
          <div>
            <DotFlasing />
          </div>
        }
      >
        <div className="flex justify-start space-x-4">
          <div className="my-2 font-bold">BulleinBoardPage</div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-baseline justify-between">
            <div className="flex items-center justify-start space-x-2">
              <div className="text-sm">{`Last updated: ${formatDate(updatedAt)}`}</div>
              <DecreaseFontSizeButton />
              <IncreaseFontSizeButton />
            </div>
            <div className="flex space-x-2">
              {bulletin?.isEditing ? (
                <SaveButton onClick={handleSaveButtonClick} />
              ) : (
                <EditButton onClick={handleEditButtonClick} />
              )}
              <CancelButton
                disabled={!bulletin?.isEditing}
                onClick={handleCancelButtonClick}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <MessageArea message={message} setMessage={setMessage} />
            <div className="text-xl font-bold text-red-500">
              {bulletin?.isEditing ? 'メッセージを編集中です...' : ''}
              <div>{autoReloadError ? `エラー: ${autoReloadError}` : ''}</div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col space-y-2">
          <div>{`id: ${bulletin?.id}`}</div>
          <div>{`message: ${bulletin?.message}`}</div>
          <div>{`isEditing: ${bulletin?.isEditing}`}</div>
          <div>{`editStartedAt: ${formatDate(new Date(bulletin?.editStartedAt ?? 0))}`}</div>
          <div>{`編集開始からの経過時間: ${durationSinceEditStart}`}</div>
        </div>
      </Suspense>
    </Layout>
  );
};

export default BulletinPage;
