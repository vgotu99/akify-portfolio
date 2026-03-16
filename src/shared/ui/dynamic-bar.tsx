import type { WithChildren } from '@/src/shared/lib/types';
import { cva } from '@/styled-system/css';

interface DynamicBarProps {
  variant: 'main' | 'search';
}

export default function DynamicBar({
  variant,
  children,
}: WithChildren<DynamicBarProps>) {
  return <header className={styleVariant({ variant })}>{children}</header>;
}

const styleVariant = cva({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  variants: {
    variant: {
      main: {
        padding: ['16', '32'],
      },
      search: {
        paddingX: ['16', '32'],
        paddingY: '16',
      },
    },
  },
});
