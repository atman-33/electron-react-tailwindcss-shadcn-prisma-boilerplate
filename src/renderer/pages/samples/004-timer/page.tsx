import { Button } from '@/components/ui/button';
import useTimer from '@/features/bulletin-board/hooks/useTimer';
import { useState } from 'react';
import SampleLayout from '../_components/layout';

const Timer = () => {
  const { time, isRunning, toggle, reset } = useTimer();

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-bold text-xl">{`${time} seconds elapsed`}</h3>
      <div className="flex space-x-4">
        <Button variant="default" onClick={toggle} className="w-20">
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button variant="destructive" onClick={reset} className="w-20">
          Reset
        </Button>
      </div>
    </div>
  );
};

const TimerPage = () => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  return (
    <SampleLayout>
      {isDisplayed && <Timer />}
      <Button
        variant="outline"
        className="my-4"
        onClick={() => setIsDisplayed((prev) => !prev)}
      >
        {isDisplayed ? 'Not Displayed' : 'Displayed'}
      </Button>
    </SampleLayout>
  );
};

export default TimerPage;
