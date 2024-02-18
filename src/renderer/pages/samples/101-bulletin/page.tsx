/* eslint-disable react/jsx-boolean-value */
import RecoilProvider from '@/components/providers/RecoilProvider';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import SampleLayout from '../_components/layout';
import CancelButton from './_components/CancelButton';
import EditButton from './_components/EditButton';

const BulleinPage = () => {
  const [message, setMessage] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditButtonClick = () => {
    console.log('Edit button clicked');
    setIsEditing(true);
  };

  const handleCancelButtonClick = () => {
    console.log('Cancel button clicked');
    setIsEditing(false);
  };

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
                disabled={!isEditing}
                onClick={handleCancelButtonClick}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              readOnly={!isEditing}
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
