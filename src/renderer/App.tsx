import '@/styles/globals.css';

import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/page';
import ElectronConfigPage from './pages/samples/001-electron-config/page';
import EnvPage from './pages/samples/002-env/page';
import PrismaSqlitePage from './pages/samples/003-prisma-sqlite/page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/001-electron-config" element={<ElectronConfigPage />} />
        <Route path="/002-env" element={<EnvPage />} />
        <Route path="/003-prisma-sqlite" element={<PrismaSqlitePage />} />
      </Routes>
    </Router>
  );
}
