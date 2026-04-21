import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface ImageSliderInfoProps {
  title?: string;
  subtitle?: string;
}

export default function ImageSliderInfo({
  title,
  subtitle,
}: ImageSliderInfoProps) {
  return (
    <div
      className={css({
        position: 'absolute',
        left: ['0', '1'],
        right: ['0', '1'],
        bottom: ['0', '1'],
        borderRadius: [, 'xl'],
        paddingTop: ['48px', '76px'],
        paddingBottom: ['32px', '77px'],
        paddingX: '16',
        background:
          'linear-gradient(180deg, rgba(30, 30, 31, 0.00) 0%, rgba(30, 30, 31, 0.64) 50%, #1E1E1F 100%)',
      })}
    >
      <div
        className={flex({
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: ['flex-start', 'center'],
        })}
      >
        <div
          className={css({
            color: 'colors.text.primaryOnDark',
            textStyle: ['mobile.headline.xxlarge', 'desktop.headline.xlarge'],
          })}
        >
          {title}
        </div>
        <div
          className={css({
            color: ['colors.text.primaryOnDark', 'colors.text.secondaryOnDark'],
            textStyle: ['mobile.body.medium', 'desktop.body.large'],
          })}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
