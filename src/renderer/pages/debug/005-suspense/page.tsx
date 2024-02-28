import AlwaysSuspend from '@/components/elements/AlwaysSuspend';
import DotFlashing from '@/components/elements/DotFlashing';
import SampleLayout from '@/pages/_components/SampleLayout';
import { Suspense } from 'react';

const SuspensePage = () => {
  return (
    <SampleLayout>
      <Suspense fallback={<DotFlashing />}>
        <AlwaysSuspend />
      </Suspense>
    </SampleLayout>
  );
};

export default SuspensePage;
