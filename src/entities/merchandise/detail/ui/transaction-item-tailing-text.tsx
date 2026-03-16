import { css } from '@/styled-system/css';

interface TransactionItemTailingTextProps {
  value: string;
}

export default function TransactionItemTailingText({
  value,
}: TransactionItemTailingTextProps) {
  return (
    <p
      className={css({
        textStyle: ['mobile.body.medium', 'desktop.body.small'],
        color: 'colors.text.primary',
      })}
    >
      {value}
    </p>
  );
}
