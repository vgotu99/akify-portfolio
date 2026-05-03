'use client';

import { useInstall } from '@/src/features/install/model/hooks';
import LinkButton from '@/src/shared/ui/link-button';

export default function BottomBarButton() {
  const { href, handleClick } = useInstall();

  return (
    <LinkButton href={href} onClick={handleClick} scroll={false}>
      <div>앱에서 보기</div>
    </LinkButton>
  );
}
