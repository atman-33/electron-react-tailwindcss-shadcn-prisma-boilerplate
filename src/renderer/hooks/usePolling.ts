import { useEffect, useState } from 'react';

type UsePollingOptions<T> = {
  /** データを取得する関数 */
  fetch: () => Promise<T>;
  /** ポーリングの間隔（デフォルトは3000ms） */
  interval?: number;
};

/**
 * usePolling hook
 * @param param0
 * @returns
 */
const usePolling = <T>({ fetch, interval = 3000 }: UsePollingOptions<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const fetchAndUpdate = async () => {
      try {
        const res = await fetch();
        setData(res);
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
  }, [fetch, interval, isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  return { data, error, isRunning, start, stop };
};

export { usePolling };
