import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface ImageSliderBadgeProps {
  currentIndex: number;
  length: number;
}

export default function ImageSliderBadge({
  currentIndex,
  length,
}: ImageSliderBadgeProps) {
  return (
    <div
      style={{
        backdropFilter: 'blur(12px)',
      }}
      className={flex({
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        paddingX: '10',
        paddingY: '3',
        borderRadius: 'full',
        background: 'colors.floating.photoCount',
        textStyle: ['mobile.caption.large', 'desktop.body.small'],
        color: 'colors.text.tertiaryOnDark',
        gap: '2',
      })}
    >
      <span
        className={css({
          color: 'colors.text.primaryOnDark',
        })}
      >
        {currentIndex}
      </span>
      <span>/</span>
      <span>{length}</span>
    </div>
  );
}
