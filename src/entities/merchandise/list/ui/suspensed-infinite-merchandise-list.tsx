'use client';

import { Suspense } from 'react';
import type { MerchandisePost } from '@/src/entities/merchandise/list/model/types';
import InfiniteMerchandiseList from '@/src/entities/merchandise/list/ui/infinite-merchandise-list';
import MerchandiseListSkeleton from '@/src/entities/merchandise/list/ui/merchandise-list-skeleton';
import {
  type UseInfiniteScrollOptions,
  useInfiniteScroll,
} from '@/src/shared/lib/use-infinite-scroll';
import { flex } from '@/styled-system/patterns';

export interface MerchandiseInfiniteScrollProps {
  infiniteScroll: Omit<UseInfiniteScrollOptions<MerchandisePost>, 'pageSize'>;
}

export type SuspensedInfiniteMerchandiseListProps =
  MerchandiseInfiniteScrollProps;

export default function SuspensedInfiniteMerchandiseList({
  infiniteScroll: { fetcher, cacheKeyPrefix },
}: SuspensedInfiniteMerchandiseListProps) {
  const { promisedPostPages, hasMore, sentinelRef } =
    useInfiniteScroll<MerchandisePost>({
      fetcher,
      cacheKeyPrefix,
    });

  return (
    <>
      {promisedPostPages.map((promisedPostPage, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: 새로운 page는 항상 promisedPostPages의 가장 끝에 추가되므로 배열 index를 사용해도 안전한 상황이에요
        <Suspense key={index} fallback={<MerchandiseListSkeleton />}>
          <InfiniteMerchandiseList promisedPostPage={promisedPostPage} />
        </Suspense>
      ))}

      {hasMore && (
        <div
          ref={sentinelRef}
          className={flex({
            justifyContent: 'center',
            width: 'full',
            gridColumn: '1 / -1',
          })}
        />
      )}
    </>
  );
}
