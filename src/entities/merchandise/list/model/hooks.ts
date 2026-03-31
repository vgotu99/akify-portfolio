import { useCallback, useEffectEvent, useState } from 'react';
import { fetchMoreMerchandiseAction } from '@/src/entities/merchandise/list/model/actions';
import type { MerchandiseListPosts } from '@/src/entities/merchandise/list/model/types';

export const useInfiniteMerchandise = () => {
  const [promisedPostPages, setPromisedPostPages] = useState<
    Promise<MerchandiseListPosts>[]
  >([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const fetchNextPage = useCallback(async (nextPage: number) => {
    try {
      const newPosts = await fetchMoreMerchandiseAction(nextPage);
      if (newPosts.length === 0) {
        setHasMore(false);
      }

      setPageCount(nextPage);

      return newPosts;
    } finally {
      setIsFetching(false);
    }
  }, []);

  const handleIntersection = useEffectEvent(() => {
    if (isFetching || !hasMore) return;

    setIsFetching(true);
    const nextPage = pageCount + 1;
    const promise = fetchNextPage(nextPage);

    setPromisedPostPages((prev) => [...prev, promise]);
  });

  const sentinelRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleIntersection();
        }
      },
      { threshold: 0, rootMargin: '500px' },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return {
    promisedPostPages,
    hasMore,
    sentinelRef,
  };
};
