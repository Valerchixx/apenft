import { useState, useCallback, useEffect } from 'react';
export function useOnDevice() {
  const isOnMobile = window.innerWidth <= 480;
  const [onMobile, setOnMobile] = useState(isOnMobile);

  const handleResize = useCallback(() => {
    setOnMobile(window.innerWidth <= 480);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return onMobile;
}

