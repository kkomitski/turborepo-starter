import { useEffect, useRef } from "react";

export default function useSkipFirstEffect(callback, dependencies) {
  const firstRenderRef = useRef(false);

  useEffect(() => {
    firstRenderRef.current = true;
  }, []);

  useEffect(() => {
    if (!firstRenderRef.current) {
      return callback();
    } else {
      firstRenderRef.current = false;
    }
  }, dependencies);
}
