'use client';

import { Children } from 'react';
import type { WithChildren } from '@/src/shared/lib/types';
import type { ImageSliderVariant } from '@/src/shared/ui/image-slider';
import ImageSliderBadge from '@/src/shared/ui/image-slider/image-slider-badge';
import ImageSliderButton from '@/src/shared/ui/image-slider/image-slider-button';
import ImageSliderIndicator from '@/src/shared/ui/image-slider/image-slider-indicator';
import { useImageSlider } from '@/src/shared/ui/image-slider/use-image-slider';
import { css, cva, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface ImageSliderControllerProps {
  variant: ImageSliderVariant;
  length: number;
  as: React.ElementType;
}

export default function ImageSliderController({
  variant,
  length,
  as: Component,
  children,
}: WithChildren<ImageSliderControllerProps>) {
  const { emblaRef, currentIndex, isLoaded, scrollNext, scrollPrev, meta } =
    useImageSlider({ variant, length });

  return (
    <Component
      className={cx(
        css({
          position: 'relative',
          width: 'full',
          overflow: 'hidden',
          borderRadius: [, 'lg'],
        }),
      )}
    >
      <div ref={emblaRef}>
        <div
          className={cx(
            flex({}),
            !isLoaded &&
              variant === 'hero' &&
              css({
                transform: [
                  'none',
                  'translateX(calc(50dvw - 392px))',
                  'translateX(calc(50dvw - 492px))',
                ],
              }),
          )}
        >
          {Children.map(children, (child, index) => {
            const isFirstIndex = index === 0;

            return (
              <div
                className={cx('group', styleVariant({ variant }))}
                data-active={index === currentIndex}
                style={{
                  opacity: isLoaded || isFirstIndex ? 1 : 0,
                  transition: isFirstIndex
                    ? 'none'
                    : 'opacity 0.5s ease-in-out',
                }}
              >
                {child}
              </div>
            );
          })}
        </div>

        {meta.showIndicator && (
          <ImageSliderIndicator
            currentIndex={currentIndex}
            length={length}
            onClickPrev={scrollPrev}
            onClickNext={scrollNext}
          />
        )}
      </div>
      {meta.showBadge && (
        <ImageSliderBadge currentIndex={currentIndex + 1} length={length} />
      )}
      {meta.showPrevButton && (
        <ImageSliderButton variant="detail" type="prev" onClick={scrollPrev} />
      )}
      {meta.showNextButton && (
        <ImageSliderButton variant="detail" type="next" onClick={scrollNext} />
      )}
    </Component>
  );
}

const styleVariant = cva({
  variants: {
    variant: {
      detail: {
        flex: '0 0 100%',
      },
      hero: {
        flex: ['0 0 100%', '0 0 784px', '0 0 984px'],
      },
    },
  },
});
