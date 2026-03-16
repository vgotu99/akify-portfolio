import { cva } from '@/styled-system/css';

type Variant = 'detail' | 'card';

interface CategoryGroupProps {
  variant: Variant;
  value: string;
}

export default function CategoryGroup({ variant, value }: CategoryGroupProps) {
  return (
    <div className={styleVariant({ variant })}>
      <div>이펙터</div>
      <div>{'>'}</div>
      <div>{value}</div>
    </div>
  );
}

const styleVariant = cva({
  base: {
    display: 'flex',
    color: 'colors.text.lightest',
  },
  variants: {
    variant: {
      detail: { textStyle: ['mobile.caption.large', 'desktop.body.small'] },
      card: { textStyle: ['mobile.caption.medium', 'desktop.body.xsmall'] },
    },
  },
});
