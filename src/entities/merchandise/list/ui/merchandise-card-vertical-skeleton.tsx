import SemanticChipGroupSkeleton from '@/src/entities/merchandise/list/ui/skeleton-semantic-chip-group';
import BrandNameSkeleton from '@/src/entities/merchandise/shared/ui/brand-name-skeleton';
import CountItemGroup from '@/src/entities/merchandise/shared/ui/count-item-group';
import CountItemSkeleton from '@/src/entities/merchandise/shared/ui/count-item-skeleton';
import MerchandisePriceSkeleton from '@/src/entities/merchandise/shared/ui/merchandise-price-skeleton';
import MerchandiseTitleSkeleton from '@/src/entities/merchandise/shared/ui/merchandise-title-skeleton';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function MerchandiseCardVerticalSkeleton() {
  return (
    <div
      className={css({
        width: 'full',
        maxWidth: '216px',
        margin: '0 auto',
      })}
    >
      <div
        className={flex({
          direction: 'column',
          gap: '10',
          width: 'full',
        })}
      >
        <div
          className={css({
            width: 'full',
            aspectRatio: 3 / 4,
            borderRadius: ['sm', 'md'],
            backgroundColor: 'colors.surface.lightGray',
            animation: 'custom-pulse',
          })}
        />

        <div className={flex({ direction: 'column', gap: '4' })}>
          <BrandNameSkeleton />
          <MerchandiseTitleSkeleton />
          <MerchandisePriceSkeleton />
        </div>

        <SemanticChipGroupSkeleton />

        <CountItemGroup>
          <CountItemSkeleton />
          <CountItemSkeleton />
        </CountItemGroup>
      </div>
    </div>
  );
}
