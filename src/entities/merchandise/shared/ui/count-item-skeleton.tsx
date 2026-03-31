import { css } from '@/styled-system/css';

export default function CountItemSkeleton() {
  return (
    <div
      className={css({
        width: '40px',
        height: '18px',
        backgroundColor: 'colors.surface.lightGray',
        borderRadius: 'sm',
        animation: 'custom-pulse',
      })}
    />
  );
}
