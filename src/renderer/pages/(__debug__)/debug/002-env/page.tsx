import { Button } from '@/components/ui/button';
import DebugLayout from '@/pages/(__debug__)/debug/_components/DebugLayout';
import { useEffect, useState } from 'react';

const EnvPage = () => {
  const [envPath, setEnvPath] = useState('');
  const [envData, setEnvData] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const path = await window.env.getEnvPath();
      setEnvPath(path);
    };
    fetch();
  }, []);

  const handleGetEnvButtonClick = async () => {
    const env = await window.env.getEnv();
    setEnvData(`DATABASE_URL: ${env.DATABASE_URL}`);
  };

  return (
    <DebugLayout>
      <div className="flex flex-col space-y-4">
        <div>envPath: {envPath}</div>
        <div>
          <Button variant="default" onClick={() => handleGetEnvButtonClick()}>
            Get env data
          </Button>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-gray-300 p-2">{envData}</div>
    </DebugLayout>
  );
};

export default EnvPage;
