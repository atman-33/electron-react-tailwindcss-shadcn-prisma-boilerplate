import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import SampleLayout from '../../_components/SampleLayout';

const ElectronConfigPage = () => {
  const [configPath, setConfigPath] = useState('');
  const [dummy, setDummy] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const path = await window.config.getConfigPath();
      setConfigPath(path);
    };

    fetch();
  }, []);

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
      <div className="flex flex-col space-y-4">
        <div>configPath: {configPath}</div>
        <div className="flex space-x-4">
          <Button
            variant="default"
            onClick={() => handleGetConfigButtonClick()}
          >
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
      </div>

      <div className="mt-4 rounded-lg bg-gray-300 p-2">{dummy}</div>
    </SampleLayout>
  );
};

export default ElectronConfigPage;
