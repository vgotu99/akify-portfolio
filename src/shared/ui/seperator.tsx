import { css } from '@/styled-system/css';

export default function Seperator() {
  return (
    <hr
      className={css({
        marginY: '8',
        borderTopWidth: 'xlight',
        borderTopColor: 'colors.border.medium',
      })}
    />
  );
}
