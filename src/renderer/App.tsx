import '@/styles/globals.css';

import { Button } from '@/components/ui/button';
import { useDummies } from '@/features/dummy/hooks/useDummies';
import { CreateDummyInput } from '@api/dummies/dto/create-dummy-input.dto';
import { Dummy } from '@prisma/client';
import { useState } from 'react';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import { useConfig } from './hooks/useConfig';

function Home() {
  const [dummies, setDummies] = useState<Dummy[]>([]);
  const { getDummies, createDummy } = useDummies();
  const { getConfig } = useConfig();

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

  const handleConfigButtonClick = async () => {
    // const value = await window.config.getItem('dummy');
    // console.log(value);
    const config = await getConfig();
    console.log(config.dummy);
  };

  return (
    <>
      <div className="m-4 p-4 bg-gray-100 rounded-lg">Sample Application</div>
      <Button variant="default" className="m-4" onClick={handleLoadButtonClick}>
        データ取得ボタン
      </Button>

      <Button variant="default" className="m-4" onClick={handleAddButtonClick}>
        データ追加ボタン
      </Button>

      <Button
        variant="default"
        className="m-4"
        onClick={handleConfigButtonClick}
      >
        Config変更
      </Button>

      <ul className="m-4">
        {dummies.map((dummy) => (
          <li key={dummy.id}>
            {dummy.id} : {dummy.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
