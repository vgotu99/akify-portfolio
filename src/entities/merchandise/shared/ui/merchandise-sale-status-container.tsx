import type { MerchandiseSaleStatus } from '@/src/entities/merchandise/shared/model/types';
import type { WithChildren } from '@/src/shared/lib/types';
import { css, cva, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface MerchandiseSaleStatusContainerProps {
  variant: 'list' | 'detail';
  saleStatus: MerchandiseSaleStatus;
}

export default function MerchandiseSaleStatusContainer({
  variant,
  saleStatus,
  children,
}: WithChildren<MerchandiseSaleStatusContainerProps>) {
  const showSaleStatus = saleStatus !== 'ON_SALE';
  const saleStatusText =
    showSaleStatus && SALE_STATUS_TEXT[variant][saleStatus];

  return (
    <div
      className={cx(
        css({
          position: 'relative',
        }),
        styleVariant({ containerVariant: variant }),
      )}
    >
      {children}
      {showSaleStatus && (
        <div
          className={cx(
            flex({
              position: 'absolute',
              align: 'center',
              justify: 'center',
              color: 'colors.text.primaryOnDark',
            }),
            styleVariant({ textVariant: variant }),
          )}
        >
          {saleStatusText}
        </div>
      )}
    </div>
  );
}

const SALE_STATUS_TEXT = {
  list: {
    SOLD_OUT: '판매완료',
    RESERVED: '예약 중',
  },
  detail: {
    SOLD_OUT: '판매 완료된 상품이에요',
    RESERVED: '예약 중인 상품이에요',
  },
};

const styleVariant = cva({
  variants: {
    containerVariant: {
      list: {
        borderRadius: ['sm', 'md'],
        overflow: 'hidden',
      },
      detail: {
        width: 'full',
        height: [, , '524px'],
      },
    },
    textVariant: {
      list: {
        inset: '0',
        textStyle: 'mobile.title.large',
      },
      detail: {
        top: '0',
        width: 'full',
        paddingY: '16',
        borderTopRadius: [, 'lg'],
        background: 'colors.surface.alphaBlackMedium',
        textStyle: ['mobile.title.small', 'desktop.label.medium'],
      },
    },
  },
});
