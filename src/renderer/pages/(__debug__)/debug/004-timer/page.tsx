import { Button } from '@/components/ui/button';
import DebugLayout from '@/pages/(__debug__)/debug/_components/DebugLayout';
import { useState } from 'react';
import useTimer from './_hooks/useTimer';

const Timer = () => {
  const { time, isRunning, toggle, reset } = useTimer();

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-xl font-bold">{`${time} seconds elapsed`}</h3>
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
    <DebugLayout>
      {isDisplayed && <Timer />}
      <Button
        variant="outline"
        className="my-4"
        onClick={() => setIsDisplayed((prev) => !prev)}
      >
        {isDisplayed ? 'Not Displayed' : 'Displayed'}
      </Button>
    </DebugLayout>
  );
};

export default TimerPage;
