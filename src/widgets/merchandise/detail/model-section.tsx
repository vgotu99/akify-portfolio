import DetailSection from '@/src/entities/merchandise/detail/ui/detail-section';
import DetailSectionTitle from '@/src/entities/merchandise/detail/ui/detail-section-title';
import InfoCard, {
  type ModelVariantValue,
} from '@/src/entities/merchandise/detail/ui/info-card';
import Toast from '@/src/shared/ui/toast';

interface ModelSectionProps extends ModelVariantValue {}

export default function ModelSection({
  modelImageUrl,
  brandName,
  modelName,
  subCategoryKorName,
}: ModelSectionProps) {
  return (
    <DetailSection>
      <DetailSectionTitle variant="model" />
      <Toast message="앱에서 확인해주세요!">
        <InfoCard
          variant="model"
          value={{
            modelImageUrl,
            brandName,
            modelName,
            subCategoryKorName,
          }}
        />
      </Toast>
    </DetailSection>
  );
}
