import Link from 'next/link';
import { css } from '@/styled-system/css';

type LinkButton = React.ComponentProps<typeof Link>;

export default function LinkButton({ children, ...props }: LinkButton) {
  return (
    <Link
      {...props}
      style={{
        backdropFilter: 'blur(4px)',
      }}
      className={css({
        borderRadius: ['md', 'xl'],
        background: [
          'colors.button.mainEnabled',
          'radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.10) 100%), #0A0A0A',
        ],
        paddingY: ['4px', '9px'],
        paddingX: ['10px', '47.5px'],
        outlineStyle: ['none', 'solid'],
        outlineWidth: 'xlight',
        outlineColor: 'colors.border.alphaOnDarkLight',
        textStyle: ['mobile.label.xsmall', 'mobile.label.medium'],
        color: ['colors.text.buttonMainBrand', 'colors.text.brandOnDark'],
        boxShadow: [, '1px 2px 2px rgba(255, 255, 255, 0.40) inset'],
        cursor: 'pointer',
        transition: 'background 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        _hover: {
          background: [
            ,
            'radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.16) 100%), #0A0A0A',
          ],
          boxShadow: [
            ,
            '1px 2px 4px rgba(255, 255, 255, 0.80) inset, 0px 2px 16px rgba(224, 255, 138, 0.30)',
          ],
        },
      })}
    >
      {children}
    </Link>
  );
}
