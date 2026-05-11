'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeaderScrollController({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;

      const scrollDownAction = () => {
        setIsScrolled(true);
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
  }, []);

  return (
    <div className="header-scroll-group" data-scrolled={isScrolled}>
      {children}
    </div>
  );
}
