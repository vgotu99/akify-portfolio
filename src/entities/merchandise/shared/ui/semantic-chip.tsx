import type { MerchandiseCondition } from '@/src/entities/merchandise/shared/model/types';
import { semanticStrings } from '@/src/shared/tokens/semantics/strings';
import EmojiCounterClockwiseArrowsButton from '@/src/shared/ui/emojis/emoji-counterclockwise-arrows-button';
import EmojiNutAndBolt from '@/src/shared/ui/emojis/emoji-nut-and-bolt';
import EmojiPackage from '@/src/shared/ui/emojis/emoji-package';
import EmojiWrench from '@/src/shared/ui/emojis/emoji-wrench';
import { css, cva, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

type BooleanVariant = 'delivery' | 'exchange' | 'partChange' | 'custom';
type StringVariant = 'effectTypes' | 'regions';
type ConditionVariant = 'condition';

type SemanticChipProps =
  | { variant: BooleanVariant; value: boolean }
  | { variant: StringVariant; value: string }
  | { variant: ConditionVariant; value: MerchandiseCondition };

export default function SemanticChip(props: SemanticChipProps) {
  const { value } = props;

  if (value === false) return null;

  const { text, emoji: EmojiComponent, style } = formatProps(props);

  return (
    <div
      className={cx(
        flex({
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 'sm',
          paddingX: '6px',
          paddingY: '3px',
          gap: '2px',
        }),
        styleVariant({ variant: style }),
      )}
    >
      {EmojiComponent && <EmojiComponent size={16} />}
      <p
        className={css({
          textStyle: ['mobile.label.xxsmall', 'mobile.label.small'],
        })}
      >
        {text}
      </p>
    </div>
  );
}

const styleVariant = cva({
  variants: {
    variant: {
      condition: {
        background: 'colors.chip.condition',
        color: 'colors.text.chipCondition',
      },
      delivery: {
        background: 'colors.chip.delivery',
        color: 'colors.text.chipDelivery',
      },
      default: {
        background: 'colors.chip.default',
        color: 'colors.text.chipDefault',
      },
    },
  },
});

type StyleVariant = 'default' | 'condition' | 'delivery';

interface FormattedProps {
  text: string;
  emoji?: React.ElementType;
  style: StyleVariant;
}

const formatProps = (props: SemanticChipProps): FormattedProps => {
  const { variant, value } = props;

  switch (variant) {
    case 'condition':
      return {
        text: CONDITION_VARIANT_TEXT_MAP[value],
        style: 'condition',
      };

    case 'effectTypes':
    case 'regions':
      return {
        text: value,
        style: 'default',
      };

    case 'delivery':
    case 'exchange':
    case 'partChange':
    case 'custom': {
      const { text, emoji, style } = BOOLEAN_VARIANT_MAP[variant];

      return {
        text,
        emoji,
        style,
      };
    }
  }
};

const BOOLEAN_VARIANT_MAP: Record<
  BooleanVariant,
  { text: string; emoji: React.ElementType; style: StyleVariant }
> = {
  delivery: {
    text: '택배가능',
    emoji: EmojiPackage,
    style: 'delivery',
  },
  exchange: {
    text: '교환가능',
    emoji: EmojiCounterClockwiseArrowsButton,
    style: 'default',
  },
  partChange: {
    text: '부품교환',
    emoji: EmojiNutAndBolt,
    style: 'default',
  },
  custom: {
    text: '커스텀',
    emoji: EmojiWrench,
    style: 'default',
  },
};

const CONDITION_VARIANT_TEXT_MAP: Record<MerchandiseCondition, string> = {
  NEW: semanticStrings.condition.brandNew,
  VERY_GOOD: semanticStrings.condition.mint,
  GOOD: semanticStrings.condition.good,
  NORMAL: semanticStrings.condition.fair,
  DEFECTIVE: semanticStrings.condition.poor,
};
