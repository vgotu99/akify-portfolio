import type { BannerListData } from '@/src/entities/banner/model/types';
import { formatBaseAlt, formatImage } from '@/src/shared/lib/formats';
import ImageSlider from '@/src/shared/ui/image-slider';
import { flex } from '@/styled-system/patterns';

interface HeroBannerProps {
  bannerListData: BannerListData;
}

export default function HeroBanner({ bannerListData }: HeroBannerProps) {
  const images = bannerListData.map((banner) => {
    const { title, subtitle, imageUrl } = banner;
    const baseAlt = formatBaseAlt(title, subtitle);
    const formattedImages = formatImage(imageUrl, baseAlt);
    const formattedImagesWithInfo = {
      ...formattedImages,
      title,
      subtitle,
    };

    return formattedImagesWithInfo;
  });

  return (
    <div
      className={flex({
        flexDirection: 'column',
        gap: '12',
        paddingX: [, '8'],
        paddingY: [, '5'],
      })}
    >
      <ImageSlider variant="hero" images={images} />
    </div>
  );
}
