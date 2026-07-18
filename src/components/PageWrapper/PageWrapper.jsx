import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset scroll position on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
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

    // Safety timeout — never stay stuck longer than 4 seconds
    const safetyTimeout = setTimeout(() => {
      if (!cancelled) setIsLoaded(true);
    }, 6000);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(safetyTimeout);
    };
  }, [isLoaded]);

  const handleFinished = useCallback(() => {
    setShowOverlay(false);
  }, []);

  // Hide scrollbar when overlay is visible
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showOverlay]);

  return (
    <>
      <div key={location.pathname} className="pageFadeTransition">
        {children}
      </div>
      {showOverlay && (
        <LoadingScreen isLoaded={isLoaded} onFinished={handleFinished} />
      )}
    </>
  );
};

export default PageWrapper;
