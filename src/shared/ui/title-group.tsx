import { formatSearchTitle } from '@/src/shared/lib/formats';
import { cva } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface TitleGroupProps {
  variant: 'main' | 'search';
  title: string;
  subtitle?: string;
}

export default function TitleGroup({
  variant,
  title,
  subtitle,
}: TitleGroupProps) {
  const formattedTitle =
    variant === 'search' ? formatSearchTitle(title) : title;

  return (
    <div
      className={flex({
        flexDirection: 'column',
        alignItems: 'flex-start',
      })}
    >
      <div className={styleVariant({ titleVariant: variant })}>
        {formattedTitle}
      </div>
      {subtitle && (
        <div className={styleVariant({ subtitleVariant: variant })}>
          {subtitle}
        </div>
      )}
    </div>
  );
}

const styleVariant = cva({
  variants: {
    titleVariant: {
      main: {
        textStyle: [
          'mobile.title.largeEnglish',
          'desktop.headline.mediumEnglish',
        ],
        color: 'colors.text.primary',
      },
      search: {
        textStyle: 'desktop.title.small',
        color: 'colors.text.secondary',
      },
    },
    subtitleVariant: {
      main: {
        textStyle: ['mobile.caption.medium', 'desktop.caption.small'],
        color: 'colors.text.secondary',
      },
      search: {},
    },
  },
});
