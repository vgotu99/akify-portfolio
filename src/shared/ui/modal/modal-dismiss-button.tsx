'use client';

import IconX from '@/src/shared/ui/icons/icon-x';
import { useModalDismiss } from '@/src/shared/ui/modal/context';
import { css } from '@/styled-system/css';

export default function ModalDismissButton() {
  const { handleDismiss } = useModalDismiss();

  return (
    <IconX
      size={24}
      className={css({ color: 'colors.icon.primary', cursor: 'pointer' })}
      onClick={handleDismiss}
    />
  );
}
