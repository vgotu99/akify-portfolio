import { css } from '@/styled-system/css';

interface ImageSliderIndicatorProps {
  currentIndex: number;
  length: number;
}

export default function ImageSliderIndicatorBar({
  currentIndex,
  length,
}: ImageSliderIndicatorProps) {
  const isFirstIndex = currentIndex === 0;
  const isSecondIndex = currentIndex === 1;
  const isLastIndex = currentIndex === length - 1;
  const isPenultimateIndex = currentIndex === length - 2;

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
          transform: `translateX(${(isFirstIndex ? length : currentIndex) * 100}%)`,
        }}
        className={css({
          visibility: isSecondIndex || isFirstIndex ? 'hidden' : 'visible',
          borderTopWidth: 'bold',
          borderTopColor: 'colors.surface.white',
          borderRadius: 'full',
          transition: 'transform 0.5s ease',
        })}
      />
      <hr
        style={{
          width: `${100 / length}%`,
          transform: `translateX(${(isLastIndex ? -1 : currentIndex) * 100}%)`,
        }}
        className={css({
          visibility: isLastIndex || isPenultimateIndex ? 'hidden' : 'visible',
          marginTop: '-2px',
          borderTopWidth: 'bold',
          borderTopColor: 'colors.surface.white',
          borderRadius: 'full',
          transition: 'transform 0.5s ease',
        })}
      />
    </div>
  );
}
