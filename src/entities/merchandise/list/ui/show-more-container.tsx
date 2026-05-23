'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ShowMoreButton from '@/src/entities/merchandise/list/ui/show-more-button';
import SuspensedInfiniteMerchandiseList from '@/src/entities/merchandise/list/ui/suspensed-infinite-merchandise-list';
import { flex } from '@/styled-system/patterns';

const showMoreCache = new Map<string, boolean>();

export default function ShowMoreContainer() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(
    () => showMoreCache.get(pathname) || false,
  );

  const handleShowMore = () => {
    showMoreCache.set(pathname, true);
    setShowMore(true);
  };

  if (!showMore)
    return (
      <div
        className={flex({
          justifyContent: 'center',
          gridColumn: '1 / -1',
        })}
      >
        <ShowMoreButton onClick={handleShowMore} />
      </div>
    );

  return <SuspensedInfiniteMerchandiseList />;
}
