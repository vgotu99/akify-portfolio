import type { MerchandiseDetailResponse } from '@/src/entities/merchandise/detail/model/types';
import DescriptionSection from '@/src/widgets/merchandise/detail/description-section';
import ImageSection from '@/src/widgets/merchandise/detail/image-section';
import ModelSection from '@/src/widgets/merchandise/detail/model-section';
import SellerSection from '@/src/widgets/merchandise/detail/seller-section';
import TitleSection from '@/src/widgets/merchandise/detail/title-section';
import TransactionSection from '@/src/widgets/merchandise/detail/transaction-section';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export interface MerchandiseDetailPageProps {
  merchandiseDetail: MerchandiseDetailResponse;
}

export default function MerchandiseDetailPage({
  merchandiseDetail,
}: MerchandiseDetailPageProps) {
  return (
    <main
      className={css({
        margin: '0 auto',
        maxWidth: 'breakpoint-desktop',
        marginY: '100px',
        display: ['none', 'block'],
        visibility: ['hidden', 'visible'],
      })}
    >
      <div
        className={flex({
          flexDirection: 'column',
          paddingX: '32',
          gap: '64',
        })}
      >
        <div
          className={flex({
            flexDirection: [, 'column', 'row'],
            gap: '32',
          })}
        >
          <ImageSection
            images={merchandiseDetail.data.postImages}
            saleStatus={merchandiseDetail.data.saleStatus}
            modelResponse={merchandiseDetail.data.modelResponse}
          />
          <div
            className={flex({
              flexDirection: 'column',
              justifyContent: [, , 'space-between'],
              flex: 1,
              minWidth: '380px',
              gap: [, '24', '0'],
            })}
          >
            <TitleSection merchandiseDetail={merchandiseDetail} />
            <div
              className={flex({
                flexDirection: 'column',
                gap: '24',
              })}
            >
              <SellerSection
                profileImage={merchandiseDetail.data.writer.profileImage}
                nickname={merchandiseDetail.data.writer.nickname}
              />
              <ModelSection
                // modelImage={merchandiseDetail.data.writer.profileImage}
                brandName={merchandiseDetail.data.modelResponse.brandName}
                modelName={merchandiseDetail.data.modelResponse.modelName}
                effectType={merchandiseDetail.data.modelResponse.effectTypes[0]}
              />
            </div>
          </div>
        </div>
        <DescriptionSection description={merchandiseDetail.data.description} />
        <TransactionSection
          delivery={merchandiseDetail.data.deliveryAvailable}
          deliveryInfo={merchandiseDetail.data.deliveryInfoResponse}
          regions={merchandiseDetail.data.regions}
          exchange={merchandiseDetail.data.exchangeAvailable}
          partChange={merchandiseDetail.data.partChange}
        />
      </div>
    </main>
  );
}
