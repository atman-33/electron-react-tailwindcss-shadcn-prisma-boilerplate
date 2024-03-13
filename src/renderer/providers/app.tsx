import DotFlashing from '@/components/elements/DotFlashing';
import RecoilProvider from '@/components/providers/RecoilProvider';
import { ReactNode, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <DotFlashing />
        </div>
      }
    >
      <RecoilProvider>
        <Router>{children}</Router>
      </RecoilProvider>
    </Suspense>
  );
};
