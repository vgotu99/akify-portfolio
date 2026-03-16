import DetailSection from '@/src/entities/merchandise/detail/ui/detail-section';
import DetailSectionTitle from '@/src/entities/merchandise/detail/ui/detail-section-title';
import InfoCard, {
  type UserVariantValue,
} from '@/src/entities/merchandise/detail/ui/info-card';

interface SellerSectionProps extends UserVariantValue {}

export default function SellerSection({
  profileImage,
  nickname,
}: SellerSectionProps) {
  return (
    <DetailSection>
      <DetailSectionTitle variant="seller" />
      <InfoCard
        variant="user"
        value={{
          profileImage,
          nickname,
        }}
      />
    </DetailSection>
  );
}
