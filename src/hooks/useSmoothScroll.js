import { useEffect } from 'react';

const useSmoothScroll = ({ speed = 1, smoothness = 0.08 } = {}) => {
  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let animationFrameId = null;
    let isAnimating = false;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      currentScrollY = lerp(currentScrollY, targetScrollY, smoothness);

      if (Math.abs(currentScrollY - targetScrollY) < 0.5) {
        currentScrollY = targetScrollY;
        window.scrollTo(0, currentScrollY);
        isAnimating = false;
        return;
      }

      window.scrollTo(0, currentScrollY);
      animationFrameId = requestAnimationFrame(animate);
    };

    const onWheel = (e) => {
      e.preventDefault();

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(targetScrollY + e.deltaY * speed, maxScroll));

      if (!isAnimating) {
        isAnimating = true;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      if (!isAnimating) {
        targetScrollY = window.scrollY;
        currentScrollY = window.scrollY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [speed, smoothness]);
};

export default useSmoothScroll;
