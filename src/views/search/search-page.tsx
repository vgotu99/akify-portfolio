import type { MerchandiseListResponse } from '@/src/entities/merchandise/list/model/types';
import ExploreSection from '@/src/widgets/merchandise/list/explore-section';

interface SearchPageProps {
  searchedMerchandiseList: MerchandiseListResponse;
  q: string;
}

export default function SearchPage({
  searchedMerchandiseList,
  q,
}: SearchPageProps) {
  return (
    <ExploreSection
      variant="search"
      merchandiseListPosts={searchedMerchandiseList.data.posts}
      q={q}
    />
  );
}
