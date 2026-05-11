import DetailSection from '@/src/entities/merchandise/detail/ui/detail-section';
import DetailSectionTitle from '@/src/entities/merchandise/detail/ui/detail-section-title';
import TransactionItem from '@/src/entities/merchandise/detail/ui/transaction-item';
import type {
  DeliveryInfoResponse,
  MerchandiseRegions,
} from '@/src/entities/merchandise/shared/model/types';
import { grid } from '@/styled-system/patterns';

interface TransactionSectionProps {
  delivery: boolean;
  deliveryInfo: DeliveryInfoResponse;
  regions: MerchandiseRegions;
  exchange: boolean;
  partChange: boolean;
}

export default function TransactionSection({
  delivery,
  deliveryInfo,
  regions,
  exchange,
  partChange,
}: TransactionSectionProps) {
  return (
    <DetailSection>
      <DetailSectionTitle variant="transaction" />
      <div
        className={grid({
          columns: [1, 2],
          columnGap: [, '56'],
        })}
      >
        <TransactionItem type="delivery" value={delivery} />
        {delivery && (
          <TransactionItem type="deliveryFee" value={deliveryInfo} />
        )}
        {regions && <TransactionItem type="regions" value={regions} />}
        <TransactionItem type="exchange" value={exchange} />
        <TransactionItem type="partChange" value={partChange} />
      </div>
    </DetailSection>
  );
}
