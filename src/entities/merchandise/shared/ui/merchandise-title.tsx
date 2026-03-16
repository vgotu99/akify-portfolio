import { cva } from '@/styled-system/css';

type Variant = 'list' | 'detail' | 'card';

interface MerchandiseTitleProps {
  variant: Variant;
  value: string;
}

export default function MerchandiseTitle({
  variant,
  value,
}: MerchandiseTitleProps) {
  return <div className={styleVariant({ variant })}>{value}</div>;
}

const styleVariant = cva({
  base: {
    color: 'colors.text.primary',
  },
  variants: {
    variant: {
      list: {
        textStyle: ['mobile.title.xsmallLight', 'desktop.label.small'],
      },
      detail: {
        textStyle: ['mobile.title.mediumEnglish', 'desktop.title.largeEnglish'],
      },
      card: {
        textStyle: ['mobile.title.medium', 'desktop.title.medium'],
      },
    },
  },
});
