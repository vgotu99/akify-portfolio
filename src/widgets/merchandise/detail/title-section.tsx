import type { MerchandiseDetailData } from '@/src/entities/merchandise/detail/model/types';
import CategoryGroup from '@/src/entities/merchandise/detail/ui/category-group';
import PriceContainer from '@/src/entities/merchandise/detail/ui/price-container';
import BrandName from '@/src/entities/merchandise/shared/ui/brand-name';
import CountItem from '@/src/entities/merchandise/shared/ui/count-item';
import CountItemGroup from '@/src/entities/merchandise/shared/ui/count-item-group';
import MerchandiseTimeDisplay from '@/src/entities/merchandise/shared/ui/merchandise-time-display';
import MerchandiseTitle from '@/src/entities/merchandise/shared/ui/merchandise-title';
import Toast from '@/src/shared/ui/toast';
import { flex } from '@/styled-system/patterns';

interface TitleSectionProps {
  merchandiseDetailData: MerchandiseDetailData;
}

export default function TitleSection({
  merchandiseDetailData,
}: TitleSectionProps) {
  return (
    <section
      className={flex({
        flexDirection: 'column',
        gap: '12',
      })}
    >
      <Toast message="앱에서 확인해주세요!">
        <BrandName
          variant="detail"
          value={merchandiseDetailData.modelResponse.brandName}
        />
      </Toast>
      <MerchandiseTitle variant="detail" value={merchandiseDetailData.title} />
      <CategoryGroup
        variant="detail"
        value={
          merchandiseDetailData.modelResponse.subCategoryInfos[0]
            ?.subCategoryKorName || ''
        }
      />
      <CountItemGroup>
        <CountItem
          variant="detail"
          value={merchandiseDetailData.viewCount}
          icon="view"
        />
        <MerchandiseTimeDisplay
          variant="detail"
          createdAt={merchandiseDetailData.createdAt}
          bumpedAt={merchandiseDetailData.bumpedAt}
        />
      </CountItemGroup>
      <PriceContainer
        price={merchandiseDetailData.price}
        condition={merchandiseDetailData.condition}
      />
    </section>
  );
}
