'use client';

import Link from 'next/link';
import { useDownload } from '@/src/shared/lib/use-download';
import { css } from '@/styled-system/css';

export default function BottomBarButton() {
  const { href, handleClick } = useDownload();

  return (
    <Link
      href={href}
      onClick={handleClick}
      scroll={false}
      style={{
        backdropFilter: 'blur(4px)',
      }}
      className={css({
        borderRadius: ['md', 'xl'],
        background: [
          'colors.button.mainEnabled',
          'radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.10) 100%), #0A0A0A',
        ],
        paddingY: ['2', '7'],
        paddingX: ['10', '45.5px'],
        borderWidth: ['none', 'xlight'],
        borderColor: 'colors.border.alphaOnDarkLight',
        textStyle: ['mobile.label.xsmall', 'desktop.label.medium'],
        color: ['colors.text.buttonMainBrand', 'colors.text.brandOnDark'],
        boxShadow: [, '1px 2px 2px rgba(255, 255, 255, 0.40) inset'],
        cursor: 'pointer',
        display: 'inline-block',
      })}
    >
      앱에서 보기
    </Link>
  );
}
