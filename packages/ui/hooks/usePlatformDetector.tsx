import { useEffect, useState } from "react";

// Define a type for the possible platforms
export type OperatingSystem = "Windows" | "Mac" | "iOS" | "Android" | null;

const usePlatformDetector = (): OperatingSystem => {
  // State to store the detected platform
  const [platform, setPlatform] = useState<OperatingSystem>(null);

  useEffect(() => {
    // Function to detect the platform based on navigator.userAgent
    const detectPlatform = (): OperatingSystem => {
      const userAgent = window.navigator.userAgent.toLowerCase();

      if (userAgent.includes("win")) {
        return "Windows";
      } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
        return "iOS";
      } else if (userAgent.includes("mac")) {
        return "Mac";
      } else if (userAgent.includes("android")) {
        return "Android";
      }

      // Default to null if the platform is not recognized
      return null;
    };

    // Set the initial platform
    setPlatform(detectPlatform());

    // Event listener for orientation changes (useful for mobile devices)
    const handleOrientationChange = (): void => {
      setPlatform(detectPlatform());
    };

    // Attach the event listener
    window.addEventListener("orientationchange", handleOrientationChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Return the detected platform
  return platform;
};

export default usePlatformDetector;
