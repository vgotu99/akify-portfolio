'use client';

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import type { WithChildren } from '@/src/shared/lib/types';

interface ToastContextValue {
  isVisible: boolean;
  showToast: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) throw new Error('ToastProvider 내부에서만 사용 가능');

  return context;
};

export const ToastProvider = ({ children }: WithChildren) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback(() => {
    if (isVisible) return;

    setIsVisible(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  }, [isVisible]);

  return (
    <ToastContext.Provider value={{ isVisible, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
