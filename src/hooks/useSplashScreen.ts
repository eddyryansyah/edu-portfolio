import { useEffect, useState } from "react";

export function useSplashScreen(duration = 1500) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => window.clearTimeout(loadingTimer);
  }, [duration]);

  return isLoading;
}
