import type { BannerListData } from '@/src/entities/banner/model/types';
import HeroBanner from '@/src/entities/banner/ui/hero-banner';
import { css } from '@/styled-system/css';

interface HeroSectionProps {
  bannerListData: BannerListData;
}

export default function HeroSection({ bannerListData }: HeroSectionProps) {
  return (
    <section
      className={css({
        width: 'full',
        height: [, '644px', '764px'],
        background: 'colors.surface.superDark',
        paddingTop: [, '100px'],
        position: [, 'fixed'],
        top: [, 0],
      })}
    >
      <HeroBanner bannerListData={bannerListData} />
    </section>
  );
}
