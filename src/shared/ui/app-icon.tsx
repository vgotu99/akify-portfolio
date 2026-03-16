import { css, cx } from '@/styled-system/css';

interface AppIconProps {
  size: number;
  className?: string;
}

export default function AppIcon({ size, className }: AppIconProps) {
  return (
    <div
      className={cx(
        css({
          padding: '6',
          background: 'colors.surface.dark',
          borderRadius: 'md',
        }),
        className,
      )}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10477_15228)">
          <g clipPath="url(#paint0_angular_10477_15228_clip_path)">
            <g transform="matrix(0.0139091 -0.0136355 0.0136343 0.0137031 12 11.9993)">
              <foreignObject
                x="-951.081"
                y="-951.081"
                width="1902.16"
                height="1902.16"
              >
                <div
                  className={css({
                    background:
                      'conic-gradient(from 90deg,rgba(133, 181, 0, 1) 0deg,rgba(170, 232, 0, 1) 126deg,rgba(209, 255, 84, 1) 234deg,rgba(209, 255, 84, 1) 360deg)',
                    height: 'full',
                    width: 'full',
                    opacity: 1,
                  })}
                />
              </foreignObject>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="paint0_angular_10477_15228_clip_path">
            <path d="M10.7836 0.272747C10.5764 0.294565 10.0582 0.376383 10.0582 0.376383C4.35273 1.2982 0 6.19638 0 12.1037C0 18.6764 5.37273 24 12 24C18.6273 24 24 18.6764 24 12.1037C24 8.82002 22.6582 5.84729 20.4873 3.69275L24 0.212747C24 0.212747 20.5964 1.97098e-05 16.2982 1.97098e-05C15.6055 1.97098e-05 13.3145 -0.0381621 10.7836 0.272747Z" />
          </clipPath>
          <clipPath id="clip0_10477_15228">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
