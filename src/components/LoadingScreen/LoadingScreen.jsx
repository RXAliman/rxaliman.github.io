import { useState, useEffect, useRef } from 'react';
import styles from './LoadingScreen.module.css';
import logoOutlineSrc from '../../assets/images/logo-outline.svg';
import logoSolidSrc from '../../assets/images/logo.svg';

const LoadingScreen = ({ isLoaded, onFinished }) => {
  // Phase 1: loading (outline logo + loader bar)
  // Phase 2: loaded (wipe to solid logo, fade out loader)
  // Phase 3: exit (logo floats up + entire overlay fades out)
  const [phase, setPhase] = useState(1);
  const hasStartedExit = useRef(false);
  const exitTimerRef = useRef(null);
  const fadeTimerRef = useRef(null);

  useEffect(() => {
    if (isLoaded && !hasStartedExit.current) {
      hasStartedExit.current = true;

      // Phase 2: reveal solid logo, hide loader
      setPhase(2);

      // Phase 3: after 2s, float logo up and fade overlay
      exitTimerRef.current = setTimeout(() => {
        setPhase(3);

        // After overlay fade completes, notify parent
        fadeTimerRef.current = setTimeout(() => {
          onFinished?.();
        }, 700);
      }, 2000);
    }
  }, [isLoaded, onFinished]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(exitTimerRef.current);
      clearTimeout(fadeTimerRef.current);
    };
  }, []);

  return (
    <div className={`${styles.overlay} ${phase === 3 ? styles.fadeOut : ''}`}>
      <div className={`${styles.logoContainer} ${phase === 3 ? styles.exit : ''}`}>
        <img
          src={logoOutlineSrc}
          alt=""
          className={`${styles.logoOutline} ${phase >= 3 ? styles.hidden : ''}`}
          draggable="false"
        />
        <img
          src={logoSolidSrc}
          alt="Logo"
          className={`${styles.logoSolid} ${phase >= 2 ? styles.revealed : ''}`}
          draggable="false"
        />
      </div>
      <span className={`${styles.loader} ${phase >= 2 ? styles.hidden : ''}`}></span>
    </div>
  );
};

export default LoadingScreen;
