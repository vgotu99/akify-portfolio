import Link from 'next/link';
import type { WithChildren } from '@/src/shared/lib/types';

interface ImageSliderLink {
  href?: string;
}

export default function ImageSliderLink({
  href,
  children,
}: WithChildren<ImageSliderLink>) {
  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
      draggable={false}
    >
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
}
