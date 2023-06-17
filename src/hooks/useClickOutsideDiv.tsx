import { useState, useRef, useEffect } from 'react';

export const useClickOutsideDiv = () => {
  const [isOpen, setIsOpen] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!domRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return { isOpen, setIsOpen, domRef };
};
