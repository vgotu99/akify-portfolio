import type { MerchandiseDetailResponse } from '@/src/entities/merchandise/detail/model/types';
import CategoryGroup from '@/src/entities/merchandise/detail/ui/category-group';
import PriceContainer from '@/src/entities/merchandise/detail/ui/price-container';
import BrandName from '@/src/entities/merchandise/shared/ui/brand-name';
import CountItem from '@/src/entities/merchandise/shared/ui/count-item';
import CountItemGroup from '@/src/entities/merchandise/shared/ui/count-item-group';
import MerchandiseTimeDisplay from '@/src/entities/merchandise/shared/ui/merchandise-time-display';
import MerchandiseTitle from '@/src/entities/merchandise/shared/ui/merchandise-title';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface TitleSectionProps {
  merchandiseDetail: MerchandiseDetailResponse;
}

export default function TitleSection({ merchandiseDetail }: TitleSectionProps) {
  return (
    <section
      className={flex({
        flexDirection: 'column',
        gap: '12',
      })}
    >
      <BrandName
        variant="detail"
        value={merchandiseDetail.data.modelResponse.brandName}
      />
      <MerchandiseTitle variant="detail" value={merchandiseDetail.data.title} />
      <CategoryGroup
        variant="detail"
        value={merchandiseDetail.data.modelResponse.effectTypes[0]}
      />
      <CountItemGroup>
        <CountItem
          variant="detail"
          value={merchandiseDetail.data.viewCount}
          icon="view"
        />
        <MerchandiseTimeDisplay
          variant="detail"
          createdAt={merchandiseDetail.data.createdAt}
          bumpedAt={merchandiseDetail.data.bumpedAt}
        />
      </CountItemGroup>
      <PriceContainer
        price={merchandiseDetail.data.price}
        condition={merchandiseDetail.data.condition}
      />
    </section>
  );
}
