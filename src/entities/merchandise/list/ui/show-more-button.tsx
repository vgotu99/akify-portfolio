'use client';

import { css } from '@/styled-system/css';

interface ShowMoreButtonProps {
  onClick: () => void;
}

export default function ShowMoreButton({ onClick }: ShowMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className={css({
        paddingX: '16',
        paddingY: '14',
        borderRadius: 'lg',
        background: 'colors.button.subEnabled',
        textStyle: 'mobile.label.large',
        color: 'colors.text.buttonSub',
        cursor: 'pointer',
      })}
    >
      더보기
    </button>
  );
}
