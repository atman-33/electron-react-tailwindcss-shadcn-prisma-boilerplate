import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDummies } from '@/features/dummy/hooks/useDummies';
import { CreateDummyInput } from '@shared/lib/api/dummies/dto';
import { Dummy } from '@shared/lib/api/dummies/models';
import { useEffect, useState } from 'react';
import SampleLayout from '../_components/layout';

const PrismaSqlitePage = () => {
  const [dbUrl, setdbUrl] = useState('');
  const [id, setId] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [dummies, setDummies] = useState<Dummy[]>([]);
  const { getDummies, createDummy, deleteDummies, updateDummy } = useDummies();

  useEffect(() => {
    const fetch = async () => {
      const env = await window.env.getEnv();
      setdbUrl(env.DATABASE_URL);
    };
    fetch();
  }, []);

  const handleLoadButtonClick = async () => {
    console.log('Load button clicked');
    try {
      setDummies(await getDummies());
    } catch (e) {
      setErrorMessage((e as Error).message);
    }
  };

  const handleAddButtonClick = async () => {
    console.log('Add button clicked');
    const data: CreateDummyInput = {
      text: 'test message...',
    };
    await createDummy(data);
    setDummies(await getDummies());
  };

  const handleDeleteButtonClick = async () => {
    console.log('Delete button clicked');
    await deleteDummies();
    setDummies(await getDummies());
  };

  const handleUpdateButtonClick = async () => {
    console.log('Update button clicked');
    await updateDummy({
      id: Number(id),
      text,
    });
    setDummies(await getDummies());
  };

  return (
    <SampleLayout>
      <div className="flex flex-col space-y-4">
        <div>dbUrl: {dbUrl}</div>
        <div>errorMessage: {errorMessage}</div>
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

        <div className="flex space-x-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="id">ID</Label>
            <Input
              type="text"
              id="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="text">Text</Label>
            <Input
              type="text"
              id="text"
              placeholder="Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <Button variant="default" onClick={handleUpdateButtonClick}>
            Update data
          </Button>
        </div>
      </div>

      <ul className="mt-4 rounded-lg bg-gray-300 p-2">
        {dummies.map((dummy) => (
          <li key={dummy.id}>
            {dummy.id} : {dummy.text}
          </li>
        ))}
      </ul>
    </SampleLayout>
  );
};

export default PrismaSqlitePage;
