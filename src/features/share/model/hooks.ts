import { usePathname, useSearchParams } from 'next/navigation';

export const useShare = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const target = searchParams.get('target');

  const isDetailPage =
    pathname.startsWith('/merchandise') || target?.startsWith('/merchandise');

  const handleShare = () => {
    const origin = window.location.origin;
    const sharedTarget = target?.startsWith('/merchandise') ? target : pathname;
    const sharedUrl = `${origin}${sharedTarget}?utm_source=web_share&utm_medium=referral`;

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
