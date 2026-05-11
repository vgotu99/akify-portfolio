'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import { UTM_KEY_CONTENT } from '@/src/entities/analytics/lib/constants';
import { getUtmParams } from '@/src/entities/analytics/lib/utils';
import type { WithChildren } from '@/src/shared/lib/types';

interface ImageSliderUtmLinkProps {
  href: string;
}

export default function ImageSliderUtmLink({
  href,
  children,
}: WithChildren<ImageSliderUtmLinkProps>) {
  const resolvedHref = useSyncExternalStore(
    () => () => {},
    () => resolveHref(href),
    () => href,
  );

  return (
    <Link
      href={resolvedHref}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
      draggable={false}
    >
      {children}
    </Link>
  );
}

const resolveHref = (href: string) => {
  const utmParams = getUtmParams();
  utmParams.set(UTM_KEY_CONTENT, 'hero_section');

  const queryString = utmParams.toString();
  const separator = href.includes('?') ? '&' : '?';

  return queryString ? `${href}${separator}${queryString}` : href;
};
