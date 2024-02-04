import { Button } from '@/components/ui/button';
import { useDummies } from '@/features/dummy/hooks/useDummies';
import '@/styles/globals.css';
import { CreateDummyInput } from '@api/dummies/dto/create-dummy-input.dto';
import { Dummy } from '@prisma/client';
import { useState } from 'react';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';

function Home() {
  const [dummies, setDummies] = useState<Dummy[]>([]);
  const { getDummies, createDummy } = useDummies();

  const handleLoadButtonClick = async () => {
    console.log('Load button clicked');
    setDummies(await getDummies());
  };

  const handAddButtonClick = async () => {
    console.log('Add button clicked');
    const data: CreateDummyInput = {
      text: 'test message...',
    };
    await createDummy(data);
  };

  return (
    <>
      <div className="m-4 p-4 bg-gray-100 rounded-lg">Sample Application</div>
      <Button variant="default" className="m-4" onClick={handleLoadButtonClick}>
        データ取得ボタン
      </Button>

      <Button variant="default" className="m-4" onClick={handAddButtonClick}>
        データ追加ボタン
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
