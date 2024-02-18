/* eslint-disable react/jsx-boolean-value */
import RecoilProvider from '@/components/providers/RecoilProvider';
import { Textarea } from '@/components/ui/textarea';
import { useBulletin } from '@/features/bulletin/hooks/useBulletin';
import { useEffect, useState } from 'react';
import CancelButton from '../../../features/bulletin/components/CancelButton';
import EditButton from '../../../features/bulletin/components/EditButton';
import SampleLayout from '../_components/SampleLayout';

const BulleinPage = () => {
  const [message, setMessage] = useState('');
  const { bulletin, initBulletin, setIsEditing } = useBulletin();

  useEffect(() => {
    initBulletin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditButtonClick = () => {
    console.log('Edit button clicked');
    setIsEditing(true);
  };

  const handleCancelButtonClick = () => {
    console.log('Cancel button clicked');
    setIsEditing(false);
  };

  // TODO: RecoilRoot でエラーが発生
  return (
    <RecoilProvider>
      <SampleLayout>
        <div className="my-2 font-bold">BulleinBoardPage</div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-baseline justify-between">
            <div className="text-sm">Last updated: yyyy/mm/dd hh:mm:ss</div>
            <div className="flex space-x-2">
              <EditButton onClick={handleEditButtonClick} />
              <CancelButton
                disabled={!bulletin?.isEditing}
                onClick={handleCancelButtonClick}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              readOnly={!bulletin?.isEditing}
              placeholder="Write something..."
              className="h-60"
            />
          </div>
        </div>
        <div>{message}</div>
      </SampleLayout>
    </RecoilProvider>
  );
};

export default BulleinPage;
