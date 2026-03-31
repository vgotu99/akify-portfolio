'use client';

import Link from 'next/link';
import { useDownload } from '@/src/features/download/model/hooks';
import IconDownload from '@/src/shared/ui/icons/icon-download';
import { css } from '@/styled-system/css';

export default function HeaderButton() {
  const { href, handleClick } = useDownload();

  return (
    <Link
      href={href}
      onClick={handleClick}
      scroll={false}
      className={css({
        paddingX: '16',
        paddingY: ['4', '5'],
        outlineStyle: 'solid',
        outlineWidth: 'xlight',
        outlineColor: 'colors.border.alphaOnDarkMedium',
        borderRadius: 'full',
        background:
          'radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.30) 100%)',
      })}
    >
      <IconDownload
        size={20}
        className={css({ color: 'colors.icon.primaryOnDark' })}
      />
    </Link>
  );
}
