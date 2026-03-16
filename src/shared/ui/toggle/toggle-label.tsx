import { css } from '@/styled-system/css';

interface ToggleLabelProps {
  value: string;
}

export default function ToggleLabel({ value }: ToggleLabelProps) {
  return (
    <div
      className={css({
        textStyle: 'mobile.label.xxsmall',
        color: 'colors.text.tertiary',
      })}
    >
      {value}
    </div>
  );
}
