/* eslint-disable react/jsx-boolean-value */
import Spinner from '@/components/elements/Spinner';
import { Textarea } from '@/components/ui/textarea';
import CancelButton from '@/features/bulletin/components/CancelButton';
import EditButton from '@/features/bulletin/components/EditButton';
import SaveButton from '@/features/bulletin/components/SaveButton';
import { useBulletinDispatcher } from '@/features/bulletin/hooks/useBulletinDispatcher';
import { bulletinSelectors } from '@/features/bulletin/stores/bulletinState';
import { useBackgroundWorker } from '@/hooks/useBackgroundWorker';
import { Suspense, useCallback, useEffect, useState } from 'react';
import SampleLayout from '../_components/SampleLayout';

const BulleinPage = () => {
  const [message, setMessage] = useState('');
  const [updatedAt, setUpdatedAt] = useState(new Date());
  const bulletinDispatcher = useBulletinDispatcher();
  const bulletin = bulletinSelectors.useGetBulletin(0);

  const {
    start: autoReloadStart,
    stop: autoReloadStop,
    error: autoReloadError,
  } = useBackgroundWorker({
    func: async () => {
      await bulletinDispatcher.reloadBulletins();
      setMessage(bulletin?.message ?? '');
      setUpdatedAt(new Date());
    },
    interval: 3000,
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
      id: bulletin?.id ?? 0,
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
    <SampleLayout>
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <div className="my-2 font-bold">BulleinBoardPage</div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-baseline justify-between">
            <div className="text-sm">{`Last updated: ${updatedAt}`}</div>
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
            <Textarea
              style={{
                backgroundColor: `${bulletin?.isEditing ? 'lightyellow' : 'white'}`,
                borderColor: `${bulletin?.isEditing ? 'red' : 'black'}`,
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'red',
              }}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              readOnly={!bulletin?.isEditing}
              placeholder="Write something..."
              className="h-60"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col space-y-2">
          <div>{`id: ${bulletin?.id}`}</div>
          <div>{`message: ${bulletin?.message}`}</div>
          <div>{`isEditing: ${bulletin?.isEditing}`}</div>
          <div>{`editStartedAt: ${bulletin?.editStartedAt}`}</div>
          <div>{`autoReloadError: ${autoReloadError}`}</div>
        </div>
      </Suspense>
    </SampleLayout>
  );
};

export default BulleinPage;
