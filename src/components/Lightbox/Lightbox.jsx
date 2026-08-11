import { useEffect, useCallback } from 'react';
import styles from './Lightbox.module.css';
import { HiX } from "react-icons/hi";

/**
 * Reusable Lightbox / modal overlay for displaying an enlarged image.
 *
 * @param {string|null} src  - The image source URL to display, or null to hide.
 * @param {string}      alt  - Alt text for the enlarged image.
 * @param {function}    onClose - Callback to close the lightbox.
 */
export default function Lightbox({ src, alt = "Enlarged image", onClose }) {
  // Lock body scroll while lightbox is open
  useEffect(() => {
    if (src) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [src]);

  // Close on Escape key
  useEffect(() => {
    if (!src) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className={styles.lightboxImage} draggable="false" />
        <button className={styles.lightboxClose} onClick={onClose}>
          <HiX /> Close
        </button>
      </div>
    </div>
  );
}
