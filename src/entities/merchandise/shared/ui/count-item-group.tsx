import type { WithChildren } from '@/src/shared/lib/types';
import { flex } from '@/styled-system/patterns';

export default function CountItemGroup({ children }: WithChildren) {
  return <div className={flex({ gap: '12' })}>{children}</div>;
}
