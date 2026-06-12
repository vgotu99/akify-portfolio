import Image from 'next/image';
import { css, cx } from '@/styled-system/css';

type ImageProps = Omit<
  React.ComponentProps<typeof Image>,
  'width' | 'height' | 'fill'
>;

interface ResponsiveImageProps extends ImageProps {
  sizes: string;
  aspectRatio: number;
  className?: string;
  objectFit?: React.CSSProperties['objectFit'];
}

export default function ResponsiveImage({
  src,
  alt,
  sizes,
  aspectRatio,
  className,
  objectFit = 'cover',
  priority,
  ...props
}: ResponsiveImageProps) {
  return (
    <div
      style={{
        aspectRatio,
      }}
      className={cx(
        css({
          position: 'relative',
          width: 'full',
          overflow: 'hidden',
          aspectRatio: 'square',
        }),
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        fetchPriority={priority ? 'high' : undefined}
        style={{ objectFit }}
        {...props}
      />
    </div>
  );
}
