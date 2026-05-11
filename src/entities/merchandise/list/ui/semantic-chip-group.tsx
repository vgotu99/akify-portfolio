import type {
  MerchandiseCondition,
  MerchandiseRegions,
} from '@/src/entities/merchandise/shared/model/types';
import SemanticChip from '@/src/entities/merchandise/shared/ui/semantic-chip';
import { css, cx } from '@/styled-system/css';

interface SemanticChipGroupProps {
  condition: MerchandiseCondition;
  regions: MerchandiseRegions;
  delivery: boolean;
  exchange: boolean;
  custom: boolean;
  partChange: boolean;
}

export default function SemanticChipGroup({
  condition,
  regions,
  delivery,
  exchange,
  custom,
  partChange,
}: SemanticChipGroupProps) {
  return (
    <div
      className={cx(
        'detail-chips',
        css({
          flexWrap: 'wrap',
          gap: '4',
        }),
      )}
    >
      <SemanticChip variant="condition" value={condition} />
      {regions &&
        regions.map((region) => (
          <SemanticChip key={region.id} variant="regions" value={region.name} />
        ))}
      <SemanticChip variant="delivery" value={delivery} />
      <SemanticChip variant="exchange" value={exchange} />
      <SemanticChip variant="custom" value={custom} />
      <SemanticChip variant="partChange" value={partChange} />
    </div>
  );
}
