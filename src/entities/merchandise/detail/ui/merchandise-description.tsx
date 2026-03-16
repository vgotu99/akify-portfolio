import { css } from '@/styled-system/css';

export interface MerchandiseDescriptionProps {
  description: string;
}

export default function MerchandiseDescription({
  description,
}: MerchandiseDescriptionProps) {
  return (
    <pre
      className={css({
        whiteSpace: 'pre-wrap',
        textStyle: ['mobile.body.large', 'desktop.body.small'],
        color: 'colors.text.primary',
      })}
    >
      {description}
    </pre>
  );
}
