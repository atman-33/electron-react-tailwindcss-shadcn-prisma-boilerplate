import { Button } from '@/components/ui/button';
import { useDummies } from '@/features/dummy/hooks/useDummies';
import { CreateDummyInput } from '@main/api/dummies/dto/create-dummy-input.dto';
import { Dummy } from '@main/lib/data-access-db/generated';
import { useState } from 'react';
import SampleLayout from '../_components/layout';

const PrismaSqlite = () => {
  const [dummies, setDummies] = useState<Dummy[]>([]);
  const { getDummies, createDummy, deleteDummies } = useDummies();

  const handleLoadButtonClick = async () => {
    console.log('Load button clicked');
    setDummies(await getDummies());
  };

  const handleAddButtonClick = async () => {
    console.log('Add button clicked');
    const data: CreateDummyInput = {
      text: 'test message...',
    };
    await createDummy(data);
  };

  const handleDeleteButtonClick = async () => {
    console.log('Delete button clicked');
    await deleteDummies();
    // setDummies(await getDummies());
  };

  return (
    <SampleLayout>
      <div className="flex space-x-4">
        <Button variant="default" onClick={handleLoadButtonClick}>
          Load data
        </Button>

        <Button variant="default" onClick={handleAddButtonClick}>
          Add data
        </Button>

        <Button variant="default" onClick={handleDeleteButtonClick}>
          Delete data
        </Button>
      </div>

      <ul className="mt-4 p-2 bg-gray-300 rounded-lg">
        {dummies.map((dummy) => (
          <li key={dummy.id}>
            {dummy.id} : {dummy.text}
          </li>
        ))}
      </ul>
    </SampleLayout>
  );
};

export default PrismaSqlite;
