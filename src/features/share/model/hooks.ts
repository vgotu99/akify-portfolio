import { usePathname, useSearchParams } from 'next/navigation';
import { UTM_KEY_MED, UTM_KEY_SRC } from '@/src/entities/install/lib/constants';

export const useShare = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const target = searchParams.get('target');

  const isDetailPage =
    pathname.startsWith('/merchandise') || target?.startsWith('/merchandise');

  const handleShare = () => {
    const origin = window.location.origin;
    const sharedTarget = target?.startsWith('/merchandise') ? target : pathname;
    const sharedUrl = `${origin}${sharedTarget}?${UTM_KEY_SRC}=web_share&${UTM_KEY_MED}=referral`;

    if (navigator.share) {
      navigator.share({ url: sharedUrl }).catch(() => {});

      return;
    }

    navigator.clipboard
      .writeText(sharedUrl)
      .then(() => {})
      .catch(() => {});
  };

  return { isDetailPage, handleShare };
};
