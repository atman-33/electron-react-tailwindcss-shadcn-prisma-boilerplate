import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SampleLayout from '../_components/layout';

const EnvPage = () => {
  const [envData, setEnvData] = useState('');

  const handleGetEnvButtonClick = async () => {
    const env = await window.env.getEnv();
    setEnvData(`DATABASE_URL: ${env.DATABASE_URL}`);
  };

  return (
    <SampleLayout>
      <div className="flex space-x-4">
        <Button variant="default" onClick={() => handleGetEnvButtonClick()}>
          Get env data
        </Button>
      </div>

      <div className="mt-4 p-2 bg-gray-300 rounded-lg">{envData}</div>
    </SampleLayout>
  );
};

export default EnvPage;
