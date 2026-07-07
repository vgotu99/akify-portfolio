import Seperator from '@/src/shared/ui/seperator';
import { css, cx } from '@/styled-system/css';

interface MerchandiseDetailGridTemplateLayoutProps {
  imageSection: React.ReactNode;
  titleSection: React.ReactNode;
  titleSectionMobile: React.ReactNode;
  transactionSection: React.ReactNode;
  modelSection: React.ReactNode;
  descriptionSection: React.ReactNode;
  sellerSection: React.ReactNode;
}

export default function MerchandiseDetailGridTemplateLayout({
  imageSection,
  titleSection,
  titleSectionMobile,
  transactionSection,
  modelSection,
  descriptionSection,
  sellerSection,
}: MerchandiseDetailGridTemplateLayoutProps) {
  return (
    <div
      className={css({
        margin: '0 auto',
        maxWidth: 'breakpoint-desktop',
        marginY: { base: '0', tablet: '100px' },
        paddingX: { base: '0', tablet: '32px' },
      })}
    >
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: { base: '1fr', tablet: 'minmax(0, 1fr) 380px' },
          gap: { base: '0', tablet: '32px' },
          gridTemplateAreas: {
            base: `
              "image"
              "title"
              "sep1"
              "transaction"
              "sep2"
              "model"
              "sep3"
              "description"
              "sep4"
              "seller"
            `,
            tablet: `
              "image title"
              "image seller"
              "image model"
              "description description"
              "transaction transaction"
            `,
          },
        })}
      >
        <div className={css({ gridArea: 'image' })}>{imageSection}</div>
        <div
          className={cx(
            css({
              gridArea: 'title',
              paddingX: { base: '16', tablet: '0' },
              alignSelf: 'start',
            }),
          )}
        >
          <div className={css({ display: { base: 'none', tablet: 'block' } })}>
            {titleSection}
          </div>
          <div className={css({ display: { base: 'block', tablet: 'none' } })}>
            {titleSectionMobile}
          </div>
        </div>
        <div
          className={css({
            gridArea: 'sep1',
            display: { base: 'block', tablet: 'none' },
            paddingX: '16',
          })}
        >
          <Seperator />
        </div>
        <div
          className={css({
            gridArea: 'transaction',
            paddingX: { base: '16', tablet: '0' },
          })}
        >
          {transactionSection}
        </div>
        <div
          className={css({
            gridArea: 'sep2',
            display: { base: 'block', tablet: 'none' },
            paddingX: '16',
          })}
        >
          <Seperator />
        </div>
        <div
          className={css({
            gridArea: 'model',
            paddingX: { base: '16', tablet: '0' },
          })}
        >
          {modelSection}
        </div>
        <div
          className={css({
            gridArea: 'sep3',
            display: { base: 'block', tablet: 'none' },
            paddingX: '16',
          })}
        >
          <Seperator />
        </div>
        <div
          className={css({
            gridArea: 'description',
            paddingX: { base: '16', tablet: '0' },
          })}
        >
          {descriptionSection}
        </div>
        <div
          className={css({
            gridArea: 'sep4',
            display: { base: 'block', tablet: 'none' },
            paddingX: '16',
          })}
        >
          <Seperator />
        </div>
        <div
          className={css({
            gridArea: 'seller',
            paddingX: { base: '16', tablet: '0' },
          })}
        >
          {sellerSection}
        </div>
      </div>
    </div>
  );
}
