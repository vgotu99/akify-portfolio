'use client';

import { useInfiniteMerchandise } from '@/src/entities/merchandise/list/model/hooks';
import MerchandiseCardVertical from '@/src/entities/merchandise/list/ui/merchandise-card-vertical';
import { flex } from '@/styled-system/patterns';

export default function InfiniteMerchandiseList() {
  const { posts, hasMore, sentinelRef } = useInfiniteMerchandise();

  return (
    <>
      {posts.map((post) => (
        <MerchandiseCardVertical key={post.id} merchandise={post} />
      ))}

      {hasMore && (
        <div
          ref={sentinelRef}
          className={flex({
            justifyContent: 'center',
            width: 'full',
            gridColumn: '1 / -1',
            paddingY: '8',
            minHeight: '200px',
          })}
        />
      )}
    </>
  );
}
