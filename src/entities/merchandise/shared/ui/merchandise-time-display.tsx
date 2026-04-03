import { isMerchandiseBumped } from '@/src/entities/merchandise/shared/lib/formats';
import CountItem from '@/src/entities/merchandise/shared/ui/count-item';

interface MerchandiseTimeDisplayProps {
  variant: 'list' | 'detail';
  createdAt: string;
  bumpedAt: string;
}

export default function MerchandiseTimeDisplay({
  variant,
  createdAt,
  bumpedAt,
}: MerchandiseTimeDisplayProps) {
  const isBumped = isMerchandiseBumped(createdAt, bumpedAt);

  return VARIANT_MAP[variant](isBumped, createdAt, bumpedAt);
}

const VARIANT_MAP = {
  list: (isBumped: boolean, createdAt: string, bumpedAt: string) => (
    <CountItem
      variant="list"
      icon={isBumped ? 'bump' : 'time'}
      value={isBumped ? bumpedAt : createdAt}
    />
  ),
  detail: (isBumped: boolean, createdAt: string, bumpedAt: string) => (
    <>
      <CountItem variant="detail" icon="time" value={createdAt} />
      {isBumped && <CountItem variant="detail" icon="bump" value={bumpedAt} />}
    </>
  ),
};
