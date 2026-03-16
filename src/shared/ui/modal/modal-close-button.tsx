'use client';

import { useRouter } from 'next/navigation';
import IconX from '@/src/shared/ui/icons/icon-x';
import { css } from '@/styled-system/css';

export default function ModalCloseButton() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <IconX
      size={24}
      className={css({ color: 'colors.icon.primary', cursor: 'pointer' })}
      onClick={handleClose}
    />
  );
}
