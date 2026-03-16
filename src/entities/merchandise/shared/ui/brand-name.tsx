import { cva } from '@/styled-system/css';

type Variant = 'list' | 'detail' | 'card';

interface BrandNameProps {
  variant: Variant;
  value: string;
}

export default function BrandName({ variant, value }: BrandNameProps) {
  const hasBrandName = Boolean(value);

  return (
    <div className={styleVariant({ variant, hasBrandName })}>
      {hasBrandName ? value : 'Other'}
    </div>
  );
}

const styleVariant = cva({
  base: {
    textDecoration: 'underline',
    color: 'colors.text.tertiary',
  },
  variants: {
    variant: {
      list: {
        textStyle: [
          'mobile.caption.largeEnglish',
          'desktop.body.xsmallEnglish',
        ],
      },
      detail: {
        textStyle: [
          'mobile.title.xsmallEnglish',
          'desktop.title.mediumEnglish',
        ],
      },
      card: {
        textStyle: ['mobile.body.smallStrong', 'desktop.label.xxsmallEnglish'],
        textDecoration: 'none',
      },
    },
    hasBrandName: {
      false: {
        textDecoration: 'none',
      },
    },
  },
});
