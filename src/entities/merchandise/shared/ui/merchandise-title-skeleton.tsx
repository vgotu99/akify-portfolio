import { css } from '@/styled-system/css';

export default function MerchandiseTitleSkeleton() {
  return (
    <div
      className={css({
        width: '80%',
        height: ['18px', '22px'],
        backgroundColor: 'colors.surface.lightGray',
        borderRadius: 'sm',
        animation: 'custom-pulse',
      })}
    />
  );
}
