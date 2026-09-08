import type { MerchandiseListPosts } from '@/src/entities/merchandise/list/model/types';
import GridLayout from '@/src/entities/merchandise/list/ui/grid-layout';
import MerchandiseCardVertical from '@/src/entities/merchandise/list/ui/merchandise-card-vertical';
import ShowMoreContainer from '@/src/entities/merchandise/list/ui/show-more-container';
import type { MerchandiseInfiniteScrollProps } from '@/src/entities/merchandise/list/ui/suspensed-infinite-merchandise-list';
import NoResult from '@/src/features/search/ui/no-result';
import { hasNextPage } from '@/src/shared/lib/utils';
import ExploreSectionLayout from '@/src/widgets/merchandise/list/explore-section-layout';

export interface ExploreSectionProps extends MerchandiseInfiniteScrollProps {
  variant: 'main' | 'search';
  merchandiseListPosts: MerchandiseListPosts;
  q?: string;
}

export default function ExploreSection({
  variant,
  merchandiseListPosts,
  infiniteScroll,
  q,
}: ExploreSectionProps) {
  const initialPageSize = 16;
  const hasNext = hasNextPage(merchandiseListPosts.length, initialPageSize);
  const hasNoResult = merchandiseListPosts.length === 0;

  return (
    <ExploreSectionLayout variant={variant} q={q}>
      {hasNoResult ? (
        <NoResult />
      ) : (
        <GridLayout>
          {merchandiseListPosts.map((post) => (
            <MerchandiseCardVertical key={post.id} merchandise={post} />
          ))}
          {hasNext && <ShowMoreContainer infiniteScroll={infiniteScroll} />}
        </GridLayout>
      )}
    </ExploreSectionLayout>
  );
}
