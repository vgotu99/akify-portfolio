'use client';

import { useSearchState } from '@/src/features/search/model/context';
import type { WithChildren } from '@/src/shared/lib/types';

export default function MobileSearchOverlayController({
  children,
}: WithChildren) {
  const { isMobileSearchOpen } = useSearchState();

  if (!isMobileSearchOpen) return null;

  return children;
}
