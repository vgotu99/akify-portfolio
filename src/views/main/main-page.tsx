import { Suspense } from 'react';
import type { BannerListResponse } from '@/src/entities/banner/model/types';
import { AsyncExploreSection } from '@/src/widgets/merchandise/list/async-explore-section';
import ExploreSectionSkeleton from '@/src/widgets/merchandise/list/explore-section-skeleton';
import HeroSection from '@/src/widgets/merchandise/list/hero-section';
import { css } from '@/styled-system/css';

interface MainPageProps {
  bannerList: BannerListResponse;
}

export default function MainPage({ bannerList }: MainPageProps) {
  return (
    <div
      className={css({
        background: 'colors.surface.superDark',
      })}
    >
      <HeroSection bannerListData={bannerList.data} />
      <Suspense fallback={<ExploreSectionSkeleton variant="main" />}>
        <AsyncExploreSection />
      </Suspense>
    </div>
  );
}
