import Link from 'next/link';
import type { MerchandisePost } from '@/src/entities/merchandise/list/model/types';
import SemanticChipGroup from '@/src/entities/merchandise/list/ui/semantic-chip-group';
import BrandName from '@/src/entities/merchandise/shared/ui/brand-name';
import CountItem from '@/src/entities/merchandise/shared/ui/count-item';
import CountItemGroup from '@/src/entities/merchandise/shared/ui/count-item-group';
import MerchandisePrice from '@/src/entities/merchandise/shared/ui/merchandise-price';
import MerchandiseTimeDisplay from '@/src/entities/merchandise/shared/ui/merchandise-time-display';
import MerchandiseTitle from '@/src/entities/merchandise/shared/ui/merchandise-title';
import ResponsiveImage from '@/src/shared/ui/responsive-image';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface MerchandiseCardVerticalProps {
  merchandise: MerchandisePost;
}

export default function MerchandiseCardVertical({
  merchandise,
}: MerchandiseCardVerticalProps) {
  return (
    <Link
      href={`/merchandise/${merchandise.id}`}
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
          aspectRatio: '',
        })}
      >
        <ResponsiveImage
          src={merchandise.thumbnail}
          alt={merchandise.modelName}
          sizes="(max-width: 768px) 50vw, 216px"
          aspectRatio={3 / 4}
          quality={25}
          loading="eager"
          key={String(merchandise.id)}
          className={css({
            borderRadius: ['sm', 'md'],
            overflow: 'hidden',
            backgroundColor: 'colors.surface.lightGray',
          })}
        />
        <div>
          <BrandName variant="list" value={merchandise.brandName} />
          <MerchandiseTitle variant="list" value={merchandise.title} />
          <MerchandisePrice variant="list" value={merchandise.price} />
        </div>
        <SemanticChipGroup
          effectTypes={merchandise.effectTypes}
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
    </Link>
  );
}
