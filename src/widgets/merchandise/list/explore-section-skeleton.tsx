import GridLayout from '@/src/entities/merchandise/list/ui/grid-layout';
import MerchandiseListSkeleton from '@/src/entities/merchandise/list/ui/merchandise-list-skeleton';
import ExploreSectionLayout from '@/src/widgets/merchandise/list/explore-section-layout';

export interface ExploreSectionSkeletonProps {
  variant?: 'main' | 'search';
  q?: string;
}

export default function ExploreSectionSkeleton({
  variant = 'main',
  q,
}: ExploreSectionSkeletonProps) {
  return (
    <ExploreSectionLayout variant={variant} q={q}>
      <GridLayout>
        <MerchandiseListSkeleton />
      </GridLayout>
    </ExploreSectionLayout>
  );
}
