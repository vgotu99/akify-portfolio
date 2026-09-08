import { fetchMoreMerchandiseAction } from '@/src/entities/merchandise/list/model/actions';
import { fetchInitialMerchandiseList } from '@/src/entities/merchandise/list/model/apis';
import ExploreSection from '@/src/widgets/merchandise/list/explore-section';

export async function AsyncExploreSection() {
  const merchandiseList = await fetchInitialMerchandiseList();

  return (
    <ExploreSection
      variant="main"
      merchandiseListPosts={merchandiseList.data.posts}
      infiniteScroll={{
        fetcher: fetchMoreMerchandiseAction,
        cacheKeyPrefix: 'merchandise',
      }}
    />
  );
}
