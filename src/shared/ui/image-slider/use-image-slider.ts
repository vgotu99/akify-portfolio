import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import type { ImageSliderVariant } from '@/src/shared/ui/image-slider';

interface UseImageSliderProps {
  variant: ImageSliderVariant;
  length: number;
}

export const useImageSlider = ({ variant, length }: UseImageSliderProps) => {
  const isVariantDetail = variant === 'detail';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    !isVariantDetail
      ? [
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]
      : [],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    onInit();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect, onInit]);

  const showDetailMeta = isVariantDetail && length > 1;
  const showBadge = showDetailMeta;
  const showPrevButton = showDetailMeta;
  const showNextButton = showDetailMeta;
  const showIndicator = !isVariantDetail && length > 1;

  return {
    emblaRef,
    currentIndex,
    isLoaded,
    scrollNext,
    scrollPrev,
    meta: {
      showBadge,
      showPrevButton,
      showNextButton,
      showIndicator,
    },
  };
};
