'use client';

import { useRouter } from 'next/navigation';
import { createContext, useCallback, useContext, useState } from 'react';
import type { WithChildren } from '@/src/shared/lib/types';

interface ModalDismissContextValue {
  handleDismiss: () => void;
  isDismissing: boolean;
}

const ModalDismissContext = createContext<ModalDismissContextValue | null>(
  null,
);

export const useModalDismiss = () => {
  const context = useContext(ModalDismissContext);

  if (!context) throw new Error('ModalDismissProvider 내부에서만 사용 가능');

  return context;
};

const ANIMATION_DURATION_MS = 200;

export const ModalDismissProvider = ({ children }: WithChildren) => {
  const [isDismissing, setIsDismissing] = useState(false);
  const router = useRouter();

  const handleDismiss = useCallback(() => {
    if (isDismissing) return;

    setIsDismissing(true);

    setTimeout(() => {
      router.back();
    }, ANIMATION_DURATION_MS);
  }, [isDismissing, router]);

  return (
    <ModalDismissContext.Provider value={{ handleDismiss, isDismissing }}>
      {children}
    </ModalDismissContext.Provider>
  );
};
