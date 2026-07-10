import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loading state on navigation
  useEffect(() => {
    setShowOverlay(true);
    setIsLoaded(false);
  }, [location.pathname]);

  // Detect when assets are ready
  useEffect(() => {
    if (isLoaded) return;

    let cancelled = false;

    const checkReady = () => {
      const images = Array.from(document.querySelectorAll('img'));
      const imagePromises = images
        .filter(img => !img.complete)
        .map(img => new Promise(resolve => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
        }));

      Promise.all([
        document.fonts.ready,
        ...imagePromises,
      ]).then(() => {
        if (!cancelled) setIsLoaded(true);
      });
    };

    // Let the page render first, then check assets
    const raf = requestAnimationFrame(() => {
      checkReady();
    });

    // Safety timeout — never stay stuck longer than 5 seconds
    const safetyTimeout = setTimeout(() => {
      if (!cancelled) setIsLoaded(true);
    }, 5000);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(safetyTimeout);
    };
  }, [isLoaded, location.pathname]);

  const handleFinished = useCallback(() => {
    setShowOverlay(false);
  }, []);

  return (
    <>
      {children}
      {showOverlay && (
        <LoadingScreen isLoaded={isLoaded} onFinished={handleFinished} />
      )}
    </>
  );
};

export default PageWrapper;
