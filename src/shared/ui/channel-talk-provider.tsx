'use client';

import { useCallback, useEffect, useRef } from 'react';
import {
  bootChannelTalk,
  shutdownChannelTalk,
} from '@/src/shared/lib/channel-talk';

const DESKTOP = { bottom: 72, right: 64 };
const MOBILE = { bottom: 48, right: 15 };
const BUTTON_SIZE = 56;
const MESSENGER_GAP = 10;

const BUTTON_CSS = `
  [data-ch-testid="launcher"] {
    bottom: ${DESKTOP.bottom}px !important;
    right: ${DESKTOP.right}px !important;
  }
  @media (max-width: 799px) {
    [data-ch-testid="launcher"] {
      bottom: ${MOBILE.bottom}px !important;
      right: ${MOBILE.right}px !important;
    }
  }
`;

const adjustMessenger = () => {
  const el = document.getElementById('ch-plugin-script');
  if (!el) return;

  const pos = window.innerWidth < 800 ? MOBILE : DESKTOP;
  el.style.setProperty(
    'bottom',
    `${pos.bottom + BUTTON_SIZE + MESSENGER_GAP}px`,
    'important',
  );
  el.style.setProperty('right', `${pos.right}px`, 'important');
};

const adjustButton = () => {
  const entry = document.getElementById('ch-plugin-entry');
  if (!entry) return false;

  const targetShadowRoots = Array.from(entry.querySelectorAll('div'))
    .map((div) => div.shadowRoot)
    .filter((shadow): shadow is ShadowRoot => shadow !== null)
    .filter((shadow) => !shadow.getElementById('ch-pos'));

  if (targetShadowRoots.length === 0) return false;

  targetShadowRoots.forEach((shadow) => {
    const style = document.createElement('style');
    style.id = 'ch-pos';
    style.textContent = BUTTON_CSS;
    shadow.appendChild(style);
  });

  return true;
};

export default function ChannelTalkProvider() {
  const resizeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleResize = useCallback(() => {
    if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);

    resizeTimerRef.current = setTimeout(() => {
      adjustMessenger();
    }, 300);
  }, []);

  useEffect(() => {
    bootChannelTalk();

    const observer = new MutationObserver((_, obs) => {
      const isSuccess = adjustButton();

      if (isSuccess) {
        adjustMessenger();
        obs.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      shutdownChannelTalk();
      window.removeEventListener('resize', handleResize);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
    };
  }, [handleResize]);

  return null;
}
