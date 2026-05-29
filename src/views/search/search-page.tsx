import type { MerchandiseListResponse } from '@/src/entities/merchandise/list/model/types';
import { fetchMoreSearchedMerchandiseAction } from '@/src/features/search/model/actions';
import ExploreSection from '@/src/widgets/merchandise/list/explore-section';

interface SearchPageProps {
  searchedMerchandiseList: MerchandiseListResponse;
  q: string;
}

export default function SearchPage({
  searchedMerchandiseList,
  q,
}: SearchPageProps) {
  const infiniteScrollFetcher = fetchMoreSearchedMerchandiseAction.bind(
    null,
    q,
  );

  return (
    <ExploreSection
      variant="search"
      merchandiseListPosts={searchedMerchandiseList.data.posts}
      q={q}
      infiniteScroll={{
        fetcher: infiniteScrollFetcher,
        cacheKeyPrefix: `query-${q}`,
      }}
    />
  );
}
