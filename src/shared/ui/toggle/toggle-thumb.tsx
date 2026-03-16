import { css } from '@/styled-system/css';

export default function ToggleThumb({ isToggleOn }: { isToggleOn: boolean }) {
  return (
    <div
      className={css({
        width: '40px',
        height: '24px',
        backgroundColor: isToggleOn ? 'colors.toggle.on' : 'colors.toggle.off',
        borderRadius: 'full',
        position: 'relative',
        transition: 'background-color 0.2s ease-in-out',
      })}
    >
      <div
        className={css({
          width: '20px',
          height: '20px',
          backgroundColor: 'colors.toggle.knob',
          borderRadius: 'full',
          position: 'absolute',
          top: '2px',
          left: '2px',
          transition: 'transform 0.2s ease-in-out',
          transform: isToggleOn ? 'translateX(16px)' : 'translateX(0)',
        })}
      />
    </div>
  );
}
