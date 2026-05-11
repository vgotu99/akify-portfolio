import type { BannerListData } from '@/src/entities/banner/model/types';
import ImageSliderUtmLink from '@/src/entities/banner/ui/image-slider-utm-link';
import { formatBaseAlt, formatImage } from '@/src/shared/lib/formats';
import ImageSlider from '@/src/shared/ui/image-slider';
import { flex } from '@/styled-system/patterns';

interface HeroBannerProps {
  bannerListData: BannerListData;
}

export default function HeroBanner({ bannerListData }: HeroBannerProps) {
  const images = bannerListData.map((banner) => {
    const { title, subtitle, imageUrl, href } = banner;
    const baseAlt = formatBaseAlt(title, subtitle);
    const formattedImages = formatImage(imageUrl, baseAlt);
    const formattedImagesWithInfo = {
      ...formattedImages,
      title,
      subtitle,
      href,
    };

    return formattedImagesWithInfo;
  });

  return (
    <ImageSlider
      variant="hero"
      images={images}
      LinkComponent={ImageSliderUtmLink}
    />
  );
}
