import DotFlasing from '@/components/elements/DotFlashing';
import ElectronConfigPage from '@/pages/(__debug__)/debug/001-electron-config/page';
import EnvPage from '@/pages/(__debug__)/debug/002-env/page';
import PrismaSqlitePage from '@/pages/(__debug__)/debug/003-prisma-sqlite/page';
import TimerPage from '@/pages/(__debug__)/debug/004-timer/page';
import SuspensePage from '@/pages/(__debug__)/debug/005-suspense/page';
import DebugPage from '@/pages/(__debug__)/debug/page';
import BulletinPage from '@/pages/bulletin/page';
import HomePage from '@/pages/page';
import { Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <DotFlasing />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

const routes = [
  {
    element: <App />,
    children: [
      { path: '/debug', element: <DebugPage /> },
      { path: '/debug/001-electron-config', element: <ElectronConfigPage /> },
      { path: '/debug/002-env', element: <EnvPage /> },
      { path: '/debug/003-prisma-sqlite', element: <PrismaSqlitePage /> },
      { path: '/debug/004-timer', element: <TimerPage /> },
      { path: '/debug/005-suspense', element: <SuspensePage /> },
      { path: '/bulletin', element: <BulletinPage /> },
      { path: '/', element: <HomePage /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];

const AppRoutes = () => {
  const element = useRoutes([...routes]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{element}</>;
};

export { AppRoutes };
