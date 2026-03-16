import type { MerchandiseCondition } from '@/src/entities/merchandise/shared/model/types';
import MerchandisePrice from '@/src/entities/merchandise/shared/ui/merchandise-price';
import SemanticChip from '@/src/entities/merchandise/shared/ui/semantic-chip';
import { flex } from '@/styled-system/patterns';

interface PriceContainerProps {
  price: string;
  condition: MerchandiseCondition;
}

export default function PriceContainer({
  price,
  condition,
}: PriceContainerProps) {
  return (
    <div
      className={flex({
        justifyContent: ['space-between', 'flex-start'],
        alignItems: 'center',
        gap: '8',
      })}
    >
      <MerchandisePrice variant="detail" value={price} />
      <SemanticChip variant="condition" value={condition} />
    </div>
  );
}
