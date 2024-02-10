import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SampleLayout from '../_components/layout';

const ElectronConfig = () => {
  const [dummy, setDummy] = useState('');

  const handleGetConfigButtonClick = async () => {
    const value = await window.config.getItem('dummy');
    console.log(value);
    setDummy(JSON.stringify(value));
  };
  const handleSetConfigButtonClick = async (value: string) => {
    const item = await window.config.setItem('dummy', value);
    console.log(item);
    setDummy(JSON.stringify(item));
  };

  return (
    <SampleLayout>
      <div className="flex space-x-4">
        <Button variant="default" onClick={() => handleGetConfigButtonClick()}>
          Get config data
        </Button>

        <Button
          variant="default"
          onClick={() => handleSetConfigButtonClick('')}
        >
          Clear config data
        </Button>

        <Button
          variant="default"
          onClick={() => handleSetConfigButtonClick('hello world')}
        >
          Set config data
        </Button>
      </div>

      <div className="mt-4 p-2 bg-gray-300 rounded-lg">{dummy}</div>
    </SampleLayout>
  );
};

export default ElectronConfig;
