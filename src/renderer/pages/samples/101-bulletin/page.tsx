/* eslint-disable react/jsx-boolean-value */
import Spinner from '@/components/elements/Spinner';
import { Textarea } from '@/components/ui/textarea';
import CancelButton from '@/features/bulletin/components/CancelButton';
import EditButton from '@/features/bulletin/components/EditButton';
import SaveButton from '@/features/bulletin/components/SaveButton';
import { useBulletinDispatcher } from '@/features/bulletin/hooks/useBulletinDispatcher';
import { bulletinSelectors } from '@/features/bulletin/stores/bulletinState';
import { Suspense, useCallback, useEffect, useState } from 'react';
import SampleLayout from '../_components/SampleLayout';

const BulleinPage = () => {
  const [message, setMessage] = useState('');
  const bulletinDispatcher = useBulletinDispatcher();
  const bulletin = bulletinSelectors.useGetBulletin(0);

  useEffect(() => {
    setMessage(bulletin?.message ?? '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditButtonClick = useCallback(() => {
    console.log('Edit button clicked');
    bulletinDispatcher.setIsEditing(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bulletin, message]);

  const handleCancelButtonClick = useCallback(() => {
    console.log('Cancel button clicked');
    setMessage(bulletin?.message ?? '');
    bulletinDispatcher.setIsEditing(false);
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
            <div className="text-sm">Last updated: yyyy/mm/dd hh:mm:ss</div>
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
        </div>
      </Suspense>
    </SampleLayout>
  );
};

export default BulleinPage;
