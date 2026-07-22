import type { MerchandisePost } from '@/src/entities/merchandise/list/model/types';
import MerchandiseCardVerticalLink from '@/src/entities/merchandise/list/ui/merchandise-card-vertical/merchandise-card-vertical-link';
import MerchandiseCardVerticalUi from '@/src/entities/merchandise/list/ui/merchandise-card-vertical/merchandise-card-vertical-ui';

export interface MerchandiseCardVerticalProps {
  merchandise: MerchandisePost;
}

export default function MerchandiseCardVertical({
  merchandise,
}: MerchandiseCardVerticalProps) {
  return (
    <MerchandiseCardVerticalLink merchandise={merchandise}>
      <MerchandiseCardVerticalUi merchandise={merchandise} />
    </MerchandiseCardVerticalLink>
  );
}
