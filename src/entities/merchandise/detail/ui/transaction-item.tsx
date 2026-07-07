import TransactionItemTailingText from '@/src/entities/merchandise/detail/ui/transaction-item-tailing-text';
import { formatNumberWithComma } from '@/src/entities/merchandise/shared/lib/formats';
import type {
  DeliveryInfoResponse,
  MerchandiseRegions,
} from '@/src/entities/merchandise/shared/model/types';
import SemanticChip from '@/src/entities/merchandise/shared/ui/semantic-chip';
import IconBox from '@/src/shared/ui/icons/icon-box';
import IconDirections from '@/src/shared/ui/icons/icon-directions';
import IconExchange from '@/src/shared/ui/icons/icon-exchange';
import IconTool from '@/src/shared/ui/icons/icon-tool';
import IconTruckDelivery from '@/src/shared/ui/icons/icon-truck-delivery';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

type DeliveryFeeType = 'deliveryFee';
type RegionsType = 'regions';
type BooleanType = 'delivery' | 'exchange' | 'partChange';

type TransactionItemProps =
  | { type: BooleanType; value: boolean }
  | { type: DeliveryFeeType; value: DeliveryInfoResponse }
  | { type: RegionsType; value: MerchandiseRegions };

export default function TransactionItem(props: TransactionItemProps) {
  const { icon: IconComponent, text, tailing } = formatProps(props);

  return (
    <div>
      <div
        key={text}
        className={flex({
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingY: '12',
          borderBottomColor: 'colors.border.medium',
          borderBottomWidth: ['none', 'xlight'],
        })}
      >
        <div className={flex({ gap: '12' })}>
          <IconComponent
            size={20}
            className={css({ color: 'colors.icon.secondary' })}
          />
          <div
            className={css({
              color: 'colors.text.secondary',
              textStyle: ['mobile.label.medium', 'desktop.label.small'],
            })}
          >
            {text}
          </div>
        </div>
        {tailing}
      </div>
    </div>
  );
}

const formatProps = (props: TransactionItemProps) => {
  const tailing = formatTailing(props);
  const { type } = props;
  const { icon, text } = TYPE_MAP[type];

  return {
    icon,
    text,
    tailing,
  };
};

const formatTailing = (props: TransactionItemProps) => {
  const { type, value } = props;
  const { tailingText } = TYPE_MAP[type];

  if (type === 'deliveryFee') {
    const tailingValue = value.deliveryFeeIncluded
      ? tailingText
      : formatNumberWithComma(value.deliveryFee);

    return <TransactionItemTailingText value={tailingValue} />;
  }

  if (type === 'regions') {
    return value ? (
      <div
        className={flex({
          gap: '4',
        })}
      >
        {value.map((v) => (
          <SemanticChip key={v.id} variant={type} value={v.name} />
        ))}
      </div>
    ) : (
      <TransactionItemTailingText value={tailingText} />
    );
  }

  return value ? (
    <SemanticChip variant={type} value={value} />
  ) : (
    <TransactionItemTailingText value={tailingText} />
  );
};

const TYPE_MAP = {
  delivery: {
    icon: IconBox,
    text: '택배거래',
    tailingText: '불가',
  },
  deliveryFee: {
    icon: IconTruckDelivery,
    text: '배송비',
    tailingText: '포함',
  },
  regions: {
    icon: IconDirections,
    text: '직거래',
    tailingText: '불가',
  },
  exchange: {
    icon: IconExchange,
    text: '교환거래',
    tailingText: '불가',
  },
  partChange: {
    icon: IconTool,
    text: '부품교체',
    tailingText: '없음',
  },
};
