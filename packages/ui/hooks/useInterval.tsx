// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from "react";

type CallbackFunction = () => void;

export const useInterval = (
  callback: CallbackFunction,
  delay: number | null
): void => {
  const savedCallback = useRef<CallbackFunction | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
