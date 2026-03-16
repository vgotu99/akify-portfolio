import { css } from '@/styled-system/css';

interface ImageSliderIndicatorProps {
  currentIndex: number;
  length: number;
}

export default function ImageSliderIndicatorBar({
  currentIndex,
  length,
}: ImageSliderIndicatorProps) {
  return (
    <div
      className={css({
        width: ['full', '656px'],
        height: '2px',
        borderRadius: 'full',
        background: 'colors.surface.dark',
        overflow: 'hidden',
      })}
    >
      <hr
        style={{
          width: `${100 / length}%`,
          transform: `translateX(${(currentIndex - 1) * 100}%)`,
        }}
        className={css({
          borderTopWidth: 'bold',
          borderTopColor: 'colors.surface.white',
          borderRadius: 'full',
          transition: 'transform 0.5s ease',
        })}
      />
    </div>
  );
}
