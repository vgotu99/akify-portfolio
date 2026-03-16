import DetailSection from '@/src/entities/merchandise/detail/ui/detail-section';
import DetailSectionTitle from '@/src/entities/merchandise/detail/ui/detail-section-title';
import InfoCard, {
  type ModelVariantValue,
} from '@/src/entities/merchandise/detail/ui/info-card';

interface ModelSectionProps extends ModelVariantValue {}

export default function ModelSection({
  modelImage,
  brandName,
  modelName,
  effectType,
}: ModelSectionProps) {
  return (
    <DetailSection>
      <DetailSectionTitle variant="model" />
      <InfoCard
        variant="model"
        value={{
          modelImage,
          brandName,
          modelName,
          effectType,
        }}
      />
    </DetailSection>
  );
}
