import type { Metadata } from 'next';
import { SOFT_404_METADATA } from '@/src/shared/lib/soft-404';
import NotFound from '@/src/shared/ui/not-found';

export const dynamic = 'force-static';

export const metadata: Metadata = SOFT_404_METADATA;

export default function CatchAllNotFound() {
  return <NotFound />;
}
