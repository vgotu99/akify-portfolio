import EmojiGrinningFace from '@/src/shared/ui/emojis/emoji-grinning-face';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface ToastProps {
  message: string | null;
}

export default function ToastMessage({ message }: ToastProps) {
  return (
    <div
      style={{ backdropFilter: 'blur(6px)' }}
      className={flex({
        alignItems: 'center',
        gap: ['4', '6'],
        position: 'fixed',
        top: ['68px', '88px'],
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'colors.surface.alphaBlackStrong',
        padding: '12',
        borderRadius: 'xl',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.25)',
      })}
    >
      <EmojiGrinningFace size={16} className={css({ flexShrink: 0 })} />
      <span
        className={css({
          color: 'colors.text.primaryOnDark',
          textStyle: ['mobile.label.small', 'desktop.body.medium'],
          whiteSpace: 'nowrap',
        })}
      >
        {message}
      </span>
    </div>
  );
}
