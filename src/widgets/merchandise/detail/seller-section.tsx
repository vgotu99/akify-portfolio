import DetailSection from '@/src/entities/merchandise/detail/ui/detail-section';
import DetailSectionTitle from '@/src/entities/merchandise/detail/ui/detail-section-title';
import InfoCard, {
  type UserVariantValue,
} from '@/src/entities/merchandise/detail/ui/info-card';
import Toast from '@/src/shared/ui/toast';

interface SellerSectionProps extends UserVariantValue {}

export default function SellerSection({
  profileImageUrl,
  nickname,
}: SellerSectionProps) {
  return (
    <DetailSection>
      <DetailSectionTitle variant="seller" />
      <Toast message="앱에서 확인해주세요!">
        <InfoCard
          variant="user"
          value={{
            profileImageUrl,
            nickname,
          }}
        />
      </Toast>
    </DetailSection>
  );
}
