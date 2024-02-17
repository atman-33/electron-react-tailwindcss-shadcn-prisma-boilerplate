import '@/styles/globals.css';

import HomePage from '@/pages/page';
import ElectronConfigPage from '@/pages/samples/001-electron-config/page';
import EnvPage from '@/pages/samples/002-env/page';
import PrismaSqlitePage from '@/pages/samples/003-prisma-sqlite/page';
import TimerPage from '@/pages/samples/004-timer/page';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import BulleinBoardPage from './pages/samples/100-bulletin-board/page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/samples/001-electron-config"
          element={<ElectronConfigPage />}
        />
        <Route path="/samples/002-env" element={<EnvPage />} />
        <Route
          path="/samples/003-prisma-sqlite"
          element={<PrismaSqlitePage />}
        />
        <Route path="/samples/004-timer" element={<TimerPage />} />
        <Route
          path="/samples/100-bulletin-board"
          element={<BulleinBoardPage />}
        />
      </Routes>
    </Router>
  );
}
