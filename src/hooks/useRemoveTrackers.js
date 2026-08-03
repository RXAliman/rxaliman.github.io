import { useEffect } from 'react';

const KNOWN_TRACKING_PARAMS = new Set([
  'fbclid',
  'gclid',
  'gclsrc',
  'dclid',
  'wbraid',
  'gbraid',
  'msclkid',
  'twclid',
  'ttclid',
  'igshid',
  'mc_eid',
  'mc_cid',
  'yclid',
  '_hsenc',
  '_hsmi',
  'ref_src',
]);

const isTrackingParam = (key) => {
  const lowerKey = key.toLowerCase();
  return KNOWN_TRACKING_PARAMS.has(lowerKey) || lowerKey.startsWith('utm_');
};

/**
 * Removes tracking query parameters (like fbclid, gclid, utm_*) from the URL
 * and updates the browser address bar cleanly without refreshing the page.
 */
export const cleanTrackingParams = () => {
  try {
    const url = new URL(window.location.href);
    const paramsToDelete = [];

    url.searchParams.forEach((_, key) => {
      if (isTrackingParam(key)) {
        paramsToDelete.push(key);
      }
    });

    if (paramsToDelete.length > 0) {
      paramsToDelete.forEach((key) => url.searchParams.delete(key));

      const cleanSearch = url.searchParams.toString();
      const newUrl = url.pathname + (cleanSearch ? `?${cleanSearch}` : '') + url.hash;

      window.history.replaceState(null, '', newUrl);
    }
  } catch (error) {
    console.error('Failed to clean URL tracking parameters:', error);
  }
};

const useRemoveTrackers = () => {
  useEffect(() => {
    cleanTrackingParams();
  }, []);
};

export default useRemoveTrackers;
