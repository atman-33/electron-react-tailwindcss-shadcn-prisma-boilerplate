import AlwaysSuspend from '@/components/elements/AlwaysSuspend';
import DotFlashing from '@/components/elements/DotFlashing';
import DebugLayout from '@/pages/(__debug__)/debug/_components/DebugLayout';
import { Suspense } from 'react';

const SuspensePage = () => {
  return (
    <DebugLayout>
      <Suspense fallback={<DotFlashing />}>
        <AlwaysSuspend />
      </Suspense>
    </DebugLayout>
  );
};

export default SuspensePage;
