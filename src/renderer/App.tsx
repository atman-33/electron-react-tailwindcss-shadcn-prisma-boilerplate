import '@/styles/globals.css';

import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/page';
import ElectronConfig from './pages/samples/001-electron-config/page';
import PrismaSqlite from './pages/samples/002-prisma-sqlite/page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/001-electron-config" element={<ElectronConfig />} />
        <Route path="/002-prisma-sqlite" element={<PrismaSqlite />} />
      </Routes>
    </Router>
  );
}
