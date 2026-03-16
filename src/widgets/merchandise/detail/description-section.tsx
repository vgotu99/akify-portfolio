import DetailSection from '@/src/entities/merchandise/detail/ui/detail-section';
import DetailSectionTitle from '@/src/entities/merchandise/detail/ui/detail-section-title';
import MerchandiseDescription, {
  type MerchandiseDescriptionProps,
} from '@/src/entities/merchandise/detail/ui/merchandise-description';

interface DescriptionSectionProps extends MerchandiseDescriptionProps {}

export default function DescriptionSection({
  description,
}: DescriptionSectionProps) {
  return (
    <DetailSection>
      <DetailSectionTitle variant="description" />
      <MerchandiseDescription description={description} />
    </DetailSection>
  );
}
