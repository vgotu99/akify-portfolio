import { usePathname } from 'next/navigation';

export const useDownload = () => {
  const pathname = usePathname();
  const href = `/download?target=${pathname}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);
    if (!isMobile) return;

    e.preventDefault();
    window.location.href = href;
  };

  return { href, handleClick };
};
