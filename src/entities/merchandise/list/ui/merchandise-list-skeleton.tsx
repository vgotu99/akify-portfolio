import SkeletonMerchandiseCardVertical from '@/src/entities/merchandise/list/ui/merchandise-card-vertical-skeleton';

const SKELETON_KEYS = ['skeleton-1', 'skeleton-2', 'skeleton-3', 'skeleton-4'];

export default function MerchandiseListSkeleton() {
  return SKELETON_KEYS.map((key) => (
    <SkeletonMerchandiseCardVertical key={key} />
  ));
}
