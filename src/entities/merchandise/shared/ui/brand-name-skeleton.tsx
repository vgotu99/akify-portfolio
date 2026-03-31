import { css } from '@/styled-system/css';

export default function BrandNameSkeleton() {
  return (
    <div
      className={css({
        width: '40%',
        height: ['18px', '20px'],
        backgroundColor: 'colors.surface.lightGray',
        borderRadius: 'sm',
        animation: 'custom-pulse',
      })}
    />
  );
}
