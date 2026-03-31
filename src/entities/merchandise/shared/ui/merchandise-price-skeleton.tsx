import { css } from '@/styled-system/css';

export default function MerchandisePriceSkeleton() {
  return (
    <div
      className={css({
        width: '40%',
        height: ['22px', '28px'],
        backgroundColor: 'colors.surface.lightGray',
        borderRadius: 'sm',
        animation: 'custom-pulse',
      })}
    />
  );
}
