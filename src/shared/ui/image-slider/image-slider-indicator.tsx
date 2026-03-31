import ImageSliderButton from '@/src/shared/ui/image-slider/image-slider-button';
import ImageSliderIndicatorBar from '@/src/shared/ui/image-slider/image-slider-indicator-bar';
import { flex } from '@/styled-system/patterns';

interface ImageSliderIndicatorProps {
  currentIndex: number;
  length: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

export default function ImageSliderIndicator({
  currentIndex,
  length,
  onClickPrev,
  onClickNext,
}: ImageSliderIndicatorProps) {
  return (
    <div
      className={flex({
        width: 'full',
        marginTop: [, '12px'],
        position: ['absolute', 'unset'],
        padding: ['16', '0'],
        bottom: ['0', 'none'],
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6',
      })}
    >
      <ImageSliderButton variant="hero" type="prev" onClick={onClickPrev} />
      <ImageSliderIndicatorBar currentIndex={currentIndex} length={length} />
      <ImageSliderButton variant="hero" type="next" onClick={onClickNext} />
    </div>
  );
}
