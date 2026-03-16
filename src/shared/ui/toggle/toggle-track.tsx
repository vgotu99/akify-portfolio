import type { WithChildren } from '@/src/shared/lib/types';
import { flex } from '@/styled-system/patterns';

interface ToggleGroupProps {
  handleToggle: () => void;
}

export default function ToggleTrack({
  handleToggle,
  children,
}: WithChildren<ToggleGroupProps>) {
  return (
    <div
      className={flex({
        gap: '4',
        alignItems: 'center',
        cursor: 'pointer',
      })}
      onClick={handleToggle}
    >
      {children}
    </div>
  );
}
