import type { MerchandiseCardVerticalProps } from '@/src/entities/merchandise/list/ui/merchandise-card-vertical/index';
import SemanticChipGroup from '@/src/entities/merchandise/list/ui/semantic-chip-group';
import BrandName from '@/src/entities/merchandise/shared/ui/brand-name';
import CountItem from '@/src/entities/merchandise/shared/ui/count-item';
import CountItemGroup from '@/src/entities/merchandise/shared/ui/count-item-group';
import MerchandisePrice from '@/src/entities/merchandise/shared/ui/merchandise-price';
import MerchandiseSaleStatusContainer from '@/src/entities/merchandise/shared/ui/merchandise-sale-status-container';
import MerchandiseTimeDisplay from '@/src/entities/merchandise/shared/ui/merchandise-time-display';
import MerchandiseTitle from '@/src/entities/merchandise/shared/ui/merchandise-title';
import ResponsiveImage from '@/src/shared/ui/responsive-image';
import { cva } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function MerchandiseCardVerticalUi({
  merchandise,
}: MerchandiseCardVerticalProps) {
  return (
    <div
      className={flex({
        direction: 'column',
        gap: '10',
        width: 'full',
      })}
    >
      <MerchandiseSaleStatusContainer
        variant="list"
        saleStatus={merchandise.saleStatus}
      >
        <ResponsiveImage
          src={merchandise.thumbnail}
          alt={merchandise.modelName}
          sizes="(max-width: 454px) calc(50vw - 11px), 216px"
          aspectRatio={3 / 4}
          quality={50}
          draggable={false}
          key={String(merchandise.id)}
          className={styleVariant({ variant: merchandise.saleStatus })}
        />
      </MerchandiseSaleStatusContainer>
      <div>
        <BrandName variant="list" value={merchandise.brandName} />
        <MerchandiseTitle variant="list" value={merchandise.title} />
        <MerchandisePrice variant="list" value={merchandise.price} />
      </div>
      <SemanticChipGroup
        condition={merchandise.condition}
        regions={merchandise.regions}
        delivery={merchandise.deliveryAvailable}
        exchange={merchandise.exchangeAvailable}
        partChange={merchandise.partChange}
        custom={merchandise.isUnbrandedOrCustom}
      />
      <CountItemGroup>
        <CountItem variant="list" icon="like" value={merchandise.likeCount} />
        <MerchandiseTimeDisplay
          variant="list"
          createdAt={merchandise.createdAt}
          bumpedAt={merchandise.bumpedAt}
        />
      </CountItemGroup>
    </div>
  );
}

const styleVariant = cva({
  base: {
    backgroundColor: 'colors.surface.lightGray',
    borderRadius: ['sm', 'md'],
    overflow: 'hidden',
    transition: 'filter 0.2s ease-in-out',
    _groupHover: {
      filter: 'brightness(0.75)',
    },
  },
  variants: {
    variant: {
      ON_SALE: {},
      SOLD_OUT: {
        filter: 'brightness(0.5)',
        _groupHover: {
          filter: 'brightness(0.375)',
        },
      },
      RESERVED: {
        filter: 'brightness(0.5)',
        _groupHover: {
          filter: 'brightness(0.375)',
        },
      },
    },
  },
});
