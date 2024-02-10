import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SampleLayout from '../_components/layout';

const ElectronConfig = () => {
  const [dummy, setDummy] = useState('');

  const handleConfigButtonClick = async () => {
    const value = await window.config.getItem('dummy');
    console.log(value);
    setDummy(JSON.stringify(value));
  };

  return (
    <SampleLayout>
      <Button variant="default" onClick={handleConfigButtonClick}>
        Get config data
      </Button>

      <div className="mt-4 p-2 bg-gray-300 rounded-lg">{dummy}</div>
    </SampleLayout>
  );
};

export default ElectronConfig;
