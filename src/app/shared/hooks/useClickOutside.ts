import { RefObject, useEffect, useRef } from 'react';

export const useClickOutside = (
  handler: () => void,
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent): void => {
      if (ref.current !== null && !ref.current.contains(evt.target as Node)) {
        handler();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return ref;
};
