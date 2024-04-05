import { useEffect, useState } from "react";

/**
 * Clean and performant hook to get the viewport size
 * or if current viewport is under or over 1024px
 *
 * @returns An object containing the width and height of viewport along with
 * boolean values for ```isMobile``` and ```isDesktop```
 *
 * @example const { screenWidth, screenHeight, isMobile, isDesktop } = useWindowSize()
 */

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    screenWidth?: number;
    screenHeight?: number;
    isMobile?: boolean;
    isDesktop?: boolean;
  }>({
    screenWidth: undefined,
    screenHeight: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        isMobile: window.innerWidth < 1024,
        isDesktop: window.innerWidth > 1024,
      });
    }

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Don't forget to remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
