import { css } from '@/styled-system/css';

type Variant = 'seller' | 'model' | 'description' | 'transaction';

interface DetailSectionTitleProps {
  variant: Variant;
}

export default function DetailSectionTitle({
  variant,
}: DetailSectionTitleProps) {
  const title = DETAIL_SECTION_TITLE_VARIANT_MAP[variant];

  return (
    <header
      className={css({
        textStyle: ['mobile.title.large', 'desktop.title.medium'],
        color: 'colors.text.secondary',
      })}
    >
      {title}
    </header>
  );
}

const DETAIL_SECTION_TITLE_VARIANT_MAP: Record<Variant, string> = {
  seller: '판매자 정보',
  model: '모델 상세정보',
  description: '추가 정보',
  transaction: '거래 정보',
};
