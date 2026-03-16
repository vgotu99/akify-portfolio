import type { MerchandiseCondition } from '@/src/entities/merchandise/shared/model/types';
import SemanticChip from '@/src/entities/merchandise/shared/ui/semantic-chip';
import { css, cx } from '@/styled-system/css';

interface SemanticChipGroupProps {
  effectTypes: Array<string>;
  condition: MerchandiseCondition;
  regions: Array<string> | null;
  delivery: boolean;
  exchange: boolean;
  custom: boolean;
  partChange: boolean;
}

export default function SemanticChipGroup({
  effectTypes,
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
      {effectTypes.map((effectType) => (
        <SemanticChip
          key={effectType}
          variant="effectTypes"
          value={effectType}
        />
      ))}
      <SemanticChip variant="condition" value={condition} />
      {regions &&
        regions.map((region) => (
          <SemanticChip key={region} variant="regions" value={region} />
        ))}
      <SemanticChip variant="delivery" value={delivery} />
      <SemanticChip variant="exchange" value={exchange} />
      <SemanticChip variant="custom" value={custom} />
      <SemanticChip variant="partChange" value={partChange} />
    </div>
  );
}
