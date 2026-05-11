import { fetchMerchandiseDetail } from '@/src/entities/merchandise/detail/model/apis';
import Seperator from '@/src/shared/ui/seperator';
import type { MerchandiseDetailPageProps } from '@/src/views/merchandise-detail/merchandise-detail-page';
import DescriptionSection from '@/src/widgets/merchandise/detail/description-section';
import ImageSection from '@/src/widgets/merchandise/detail/image-section';
import ModelSection from '@/src/widgets/merchandise/detail/model-section';
import SellerSection from '@/src/widgets/merchandise/detail/seller-section';
import TitleSectionMobile from '@/src/widgets/merchandise/detail/title-section-mobile';
import TransactionSection from '@/src/widgets/merchandise/detail/transaction-section';
import { css } from '@/styled-system/css';

export default function MerchandiseDetailMobilePage({
  merchandiseDetail,
}: MerchandiseDetailPageProps) {
  return (
    <div
      className={css({
        display: ['block', 'none'],
        visibility: ['visible', 'hidden'],
      })}
    >
      <ImageSection
        images={merchandiseDetail.data.postImages}
        saleStatus={merchandiseDetail.data.saleStatus}
        modelResponse={merchandiseDetail.data.modelResponse}
      />
      <div className={css({ paddingX: '16' })}>
        <TitleSectionMobile merchandiseDetail={merchandiseDetail} />
        <Seperator />
        <TransactionSection
          delivery={merchandiseDetail.data.deliveryAvailable}
          deliveryInfo={merchandiseDetail.data.deliveryInfoResponse}
          regions={merchandiseDetail.data.regions}
          exchange={merchandiseDetail.data.exchangeAvailable}
          partChange={merchandiseDetail.data.partChange}
        />
        <Seperator />
        <ModelSection
          modelImageUrl={merchandiseDetail.data.modelResponse.modelImageUrl}
          brandName={merchandiseDetail.data.modelResponse.brandName}
          modelName={merchandiseDetail.data.modelResponse.modelName}
          subCategoryKorName={
            merchandiseDetail.data.modelResponse.subCategoryInfos[0]
              .subCategoryKorName
          }
        />
        <Seperator />
        <DescriptionSection description={merchandiseDetail.data.description} />
        <Seperator />
        <SellerSection
          profileImageUrl={merchandiseDetail.data.writer.profileImage}
          nickname={merchandiseDetail.data.writer.nickname}
        />
      </div>
    </div>
  );
}
