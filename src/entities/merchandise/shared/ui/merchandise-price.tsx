import { formatNumberWithComma } from '@/src/entities/merchandise/shared/lib/formats';
import { cva } from '@/styled-system/css';

type Variant = 'list' | 'detail';

interface MerchandisePriceProps {
  variant: Variant;
  value: string;
}

export default function MerchandisePrice({
  variant,
  value,
}: MerchandisePriceProps) {
  return (
    <div className={styleVariant({ variant })}>
      {formatNumberWithComma(value)}원
    </div>
  );
}

const styleVariant = cva({
  base: {
    color: 'colors.text.primary',
  },
  variants: {
    variant: {
      list: {
        textStyle: ['mobile.title.smallStrong', 'desktop.title.medium'],
      },
      detail: {
        textStyle: ['mobile.headline.medium', 'desktop.title.xlarge'],
      },
    },
  },
});
