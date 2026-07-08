'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ShowMoreButton from '@/src/entities/merchandise/list/ui/show-more-button';
import type { MerchandiseInfiniteScrollProps } from '@/src/entities/merchandise/list/ui/suspensed-infinite-merchandise-list';
import { getCacheKey } from '@/src/shared/lib/ttl-cache';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const SuspensedInfiniteMerchandiseList = dynamic(
  () =>
    import(
      '@/src/entities/merchandise/list/ui/suspensed-infinite-merchandise-list'
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className={css({
          gridColumn: '1 / -1',
          height: '52px',
        })}
      />
    ),
  },
);

const showMoreCache = new Map<string, boolean>();

type ShowMoreContainerProps = MerchandiseInfiniteScrollProps;

export default function ShowMoreContainer({
  infiniteScroll,
}: ShowMoreContainerProps) {
  const pathname = usePathname();
  const cacheKey = getCacheKey(infiniteScroll.cacheKeyPrefix, pathname);

  const [showMore, setShowMore] = useState(
    () => showMoreCache.get(cacheKey) || false,
  );

  const handleShowMore = () => {
    showMoreCache.set(cacheKey, true);
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

  return <SuspensedInfiniteMerchandiseList infiniteScroll={infiniteScroll} />;
}
