import type { WithChildren } from '@/src/shared/lib/types';
import { ToastProvider } from '@/src/shared/ui/toast/context';
import ToastController from '@/src/shared/ui/toast/toast-controller';
import ToastMessage from '@/src/shared/ui/toast/toast-message';

interface ToastProps {
  message: string;
}

export default function Toast({ children, message }: WithChildren<ToastProps>) {
  return (
    <ToastProvider>
      <ToastController toastMessage={<ToastMessage message={message} />}>
        {children}
      </ToastController>
    </ToastProvider>
  );
}
