import {
  calculateRelativeTime,
  formatNumberWithComma,
} from '@/src/entities/merchandise/shared/lib/formats';
import IconCircleArrowUp from '@/src/shared/ui/icons/icon-circle-arrow-up';
import IconClock from '@/src/shared/ui/icons/icon-clock';
import IconEye from '@/src/shared/ui/icons/icon-eye';
import IconHeart from '@/src/shared/ui/icons/icon-heart';
import { css, cva } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

type Variant = 'list' | 'detail';
type Icon = 'like' | 'view' | 'time' | 'bump';

interface CountItemProps {
  variant: Variant;
  value: string | number;
  icon: Icon;
}

export default function CountItem({ variant, value, icon }: CountItemProps) {
  const IconComponent = COUNT_ITEM_ICONS[icon];
  const formattedValue = formatValue(icon, value);

  return (
    <div
      className={flex({
        alignItems: 'center',
        gap: '2',
      })}
    >
      <IconComponent
        size={16}
        className={css({ color: 'colors.text.lightest' })}
      />
      <p className={styleVariant({ variant })}>{formattedValue}</p>
    </div>
  );
}

const formatValue = (icon: Icon, value: string | number) => {
  const isTimeOrBump = icon === 'time' || icon === 'bump';
  const isCount = typeof value === 'number';

  if (!isTimeOrBump || isCount) return formatNumberWithComma(String(value));

  return calculateRelativeTime(value);
};

const COUNT_ITEM_ICONS = {
  like: IconHeart,
  view: IconEye,
  time: IconClock,
  bump: IconCircleArrowUp,
};

const styleVariant = cva({
  base: {
    color: 'colors.text.lightest',
  },
  variants: {
    variant: {
      list: {
        textStyle: 'mobile.caption.medium',
      },
      detail: {
        textStyle: ['mobile.caption.medium', 'desktop.body.small'],
      },
    },
  },
});
