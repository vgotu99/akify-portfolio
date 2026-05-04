import { usePathname } from 'next/navigation';
import {
  getBridgeUrl,
  resolveTargetPathForBridge,
} from '@/src/entities/install/lib/utils';

export const useInstall = () => {
  const pathname = usePathname();
  const targetPath = resolveTargetPathForBridge(pathname);

  const href = `/install?target=${encodeURIComponent(targetPath)}`;

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

    if (!isMobile) return;

    e.preventDefault();

    const bridgeUrl = await getBridgeUrl(targetPath);
    window.location.href = bridgeUrl;
  };

  return { href, handleClick };
};
