import { useEffect, useState } from 'react';

type UseBackgroundWorkerOptions = {
  /** 定期的に実行する関数 */
  func: () => Promise<void>;
  /** 実行間隔（デフォルトは3000ms） */
  interval?: number;
};

/**
 * usePolling hook
 * @param param0
 * @returns
 */
const useBackgroundWorker = ({
  func,
  interval = 3000,
}: UseBackgroundWorkerOptions) => {
  const [error, setError] = useState<Error | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const fetchAndUpdate = async () => {
      try {
        await func();
      } catch (e: any) {
        setError(e);
      }
    };

    let intervalId: number | undefined;

    if (isRunning) {
      intervalId = window.setInterval(fetchAndUpdate, interval);
    }

    // コンポーネントのアンマウント時にタイマーをクリア
    return () => clearInterval(intervalId);
  }, [func, interval, isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  return { error, isRunning, start, stop };
};

export { useBackgroundWorker };
