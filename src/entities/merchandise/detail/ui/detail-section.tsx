import type { WithChildren } from '@/src/shared/lib/types';
import { flex } from '@/styled-system/patterns';

export default function DetailSection({ children }: WithChildren) {
  return (
    <section
      className={flex({
        flexDirection: 'column',
        gap: ['16', '8'],
        paddingY: ['16', '0'],
      })}
    >
      {children}
    </section>
  );
}
