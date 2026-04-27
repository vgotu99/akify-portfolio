'use client';

import { useDownload } from '@/src/features/download/model/hooks';
import LinkButton from '@/src/shared/ui/link-button';

export default function BottomBarButton() {
  const { href, handleClick } = useDownload();

  return (
    <LinkButton href={href} onClick={handleClick} scroll={false}>
      <div>앱에서 보기</div>
    </LinkButton>
  );
}
