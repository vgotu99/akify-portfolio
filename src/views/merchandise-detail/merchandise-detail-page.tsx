import type { MerchandiseDetailData } from '@/src/entities/merchandise/detail/model/types';
import DescriptionSection from '@/src/widgets/merchandise/detail/description-section';
import ImageSection from '@/src/widgets/merchandise/detail/image-section';
import MerchandiseDetailGridTemplateLayout from '@/src/widgets/merchandise/detail/merchandise-detail-grid-template-layout';
import ModelSection from '@/src/widgets/merchandise/detail/model-section';
import SellerSection from '@/src/widgets/merchandise/detail/seller-section';
import TitleSection from '@/src/widgets/merchandise/detail/title-section';
import TitleSectionMobile from '@/src/widgets/merchandise/detail/title-section-mobile';
import TransactionSection from '@/src/widgets/merchandise/detail/transaction-section';

interface MerchandiseDetailPageProps {
  merchandiseDetailData: MerchandiseDetailData;
}

export default function MerchandiseDetailPage({
  merchandiseDetailData,
}: MerchandiseDetailPageProps) {
  return (
    <MerchandiseDetailGridTemplateLayout
      imageSection={
        <ImageSection
          images={merchandiseDetailData.postImages}
          saleStatus={merchandiseDetailData.saleStatus}
          modelResponse={merchandiseDetailData.modelResponse}
        />
      }
      titleSection={
        <TitleSection merchandiseDetailData={merchandiseDetailData} />
      }
      titleSectionMobile={
        <TitleSectionMobile merchandiseDetailData={merchandiseDetailData} />
      }
      transactionSection={
        <TransactionSection
          delivery={merchandiseDetailData.deliveryAvailable}
          deliveryInfo={merchandiseDetailData.deliveryInfoResponse}
          regions={merchandiseDetailData.regions}
          exchange={merchandiseDetailData.exchangeAvailable}
          partChange={merchandiseDetailData.partChange}
        />
      }
      modelSection={
        <ModelSection
          modelImageUrl={merchandiseDetailData.modelResponse.modelImageUrl}
          brandName={merchandiseDetailData.modelResponse.brandName}
          modelName={merchandiseDetailData.modelResponse.modelName}
          subCategoryKorName={
            merchandiseDetailData.modelResponse.subCategoryInfos[0]
              ?.subCategoryKorName || ''
          }
        />
      }
      descriptionSection={
        <DescriptionSection description={merchandiseDetailData.description} />
      }
      sellerSection={
        <SellerSection
          profileImageUrl={merchandiseDetailData.writer.profileImage}
          nickname={merchandiseDetailData.writer.nickname}
        />
      }
    />
  );
}
