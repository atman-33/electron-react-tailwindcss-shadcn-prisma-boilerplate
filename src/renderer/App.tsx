import '@/styles/globals.css';

import RecoilProvider from '@/components/providers/RecoilProvider';
import ElectronConfigPage from '@/pages/debug/001-electron-config/page';
import EnvPage from '@/pages/debug/002-env/page';
import PrismaSqlitePage from '@/pages/debug/003-prisma-sqlite/page';
import TimerPage from '@/pages/debug/004-timer/page';
import HomePage from '@/pages/page';
import { Suspense } from 'react';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import DotFlasing from './components/elements/DotFlashing';
import BulleinPage from './pages/bulletin/page';
import SuspensePage from './pages/debug/005-suspense/page';

export default function App() {
  return (
    <RecoilProvider>
      <Suspense fallback={<DotFlasing />}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/debug/001-electron-config"
              element={<ElectronConfigPage />}
            />
            <Route path="/debug/002-env" element={<EnvPage />} />
            <Route
              path="/debug/003-prisma-sqlite"
              element={<PrismaSqlitePage />}
            />
            <Route path="/debug/004-timer" element={<TimerPage />} />
            <Route path="/debug/005-suspense" element={<SuspensePage />} />
            <Route path="/bulletin" element={<BulleinPage />} />
          </Routes>
        </Router>
      </Suspense>
    </RecoilProvider>
  );
}
