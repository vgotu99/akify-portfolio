import type { BannerListResponse } from '@/src/entities/banner/model/types';
import { fetchMoreMerchandiseAction } from '@/src/entities/merchandise/list/model/actions';
import type { MerchandiseListResponse } from '@/src/entities/merchandise/list/model/types';
import ExploreSection from '@/src/widgets/merchandise/list/explore-section';
import HeroSection from '@/src/widgets/merchandise/list/hero-section';
import { css } from '@/styled-system/css';

interface MainPageProps {
  merchandiseList: MerchandiseListResponse;
  bannerList: BannerListResponse;
}

export default function MainPage({
  merchandiseList,
  bannerList,
}: MainPageProps) {
  return (
    <div
      className={css({
        background: 'colors.surface.superDark',
      })}
    >
      <HeroSection bannerListData={bannerList.data} />
      <ExploreSection
        variant="main"
        merchandiseListPosts={merchandiseList.data.posts}
        infiniteScroll={{
          fetcher: fetchMoreMerchandiseAction,
          cacheKeyPrefix: 'merchandise',
        }}
      />
    </div>
  );
}
