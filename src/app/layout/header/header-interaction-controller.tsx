'use client';

import { useEffect, useRef, useState } from 'react';
import {
  useSearchActions,
  useSearchState,
} from '@/src/features/search/model/context';

export default function HeaderInteractionController({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isFocused } = useSearchState();
  const { setIsFocused } = useSearchActions();
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;

      const scrollDownAction = () => {
        setIsScrolled(true);
        setIsFocused(false);
      };

      const scrollUpAction = () => {
        setIsScrolled(false);
      };

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const lastScrollY = lastScrollYRef.current;
        const isScrollingDown = currentScrollY > lastScrollY;

        isScrollingDown ? scrollDownAction() : scrollUpAction();

        lastScrollYRef.current = currentScrollY;
        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsFocused]);

  return (
    <div
      className="header-interaction-group"
      data-interacted={isScrolled && !isFocused}
    >
      {children}
    </div>
  );
}
