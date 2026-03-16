import type { WithChildren } from '@/src/shared/lib/types';
import { css, cx } from '@/styled-system/css';
import { grid } from '@/styled-system/patterns';

export default function GridLayout({ children }: WithChildren) {
  return (
    <article
      className={cx(
        grid({
          columns: [2, 4],
          columnGap: ['6', '8', '24'],
          rowGap: ['24', '32'],
        }),
        css({
          margin: '0 auto',
          paddingX: ['8', '32'],
        }),
      )}
    >
      {children}
    </article>
  );
}
