import { usePathname } from 'next/navigation';
import { useCallback, useEffectEvent, useRef, useState } from 'react';
import { createTTLCache, getCacheKey } from '@/src/shared/lib/ttl-cache';
import { hasNextPage } from '@/src/shared/lib/utils';

interface InfiniteListCacheData<T> {
  promisedPostPages: Promise<T[]>[];
  hasMore: boolean;
  pageCount: number;
}

const infiniteListCache = createTTLCache<InfiniteListCacheData<unknown>>();

export interface UseInfiniteScrollOptions<T> {
  fetcher: (page: number) => Promise<T[]>;
  cacheKeyPrefix: string;
  pageSize?: number;
}

export const useInfiniteScroll = <T>({
  fetcher,
  cacheKeyPrefix,
  pageSize = 16,
}: UseInfiniteScrollOptions<T>) => {
  const pathname = usePathname();
  const cacheKey = getCacheKey(cacheKeyPrefix, pathname);
  const fetcherRef = useRef(fetcher);
  const latestCacheKeyRef = useRef(cacheKey);

  fetcherRef.current = fetcher;

  const getCachedOrDefault = useCallback(
    (key: string): InfiniteListCacheData<T> => {
      return (
        (infiniteListCache.get(key) as
          | InfiniteListCacheData<T>
          | undefined) || {
          promisedPostPages: [],
          hasMore: true,
          pageCount: 0,
        }
      );
    },
    [],
  );

  const cached = getCachedOrDefault(cacheKey);

  const [promisedPostPages, setPromisedPostPages] = useState<Promise<T[]>[]>(
    cached.promisedPostPages,
  );
  const [hasMore, setHasMore] = useState(cached.hasMore);
  const [pageCount, setPageCount] = useState(cached.pageCount);
  const [isFetching, setIsFetching] = useState(false);
  const isActiveCacheKey = cacheKey === latestCacheKeyRef.current;

  if (!isActiveCacheKey) {
    latestCacheKeyRef.current = cacheKey;
    const updatedCache = getCachedOrDefault(cacheKey);
    setPromisedPostPages(updatedCache.promisedPostPages);
    setHasMore(updatedCache.hasMore);
    setPageCount(updatedCache.pageCount);
  }

  const createActiveSetStateAction = useCallback(
    <S>(setStateAction: (state: S) => void) => {
      return (state: S) => {
        if (isActiveCacheKey) {
          setStateAction(state);
        }
      };
    },
    [isActiveCacheKey],
  );

  const setActivePromisedPages =
    createActiveSetStateAction(setPromisedPostPages);
  const setActiveHasMore = createActiveSetStateAction(setHasMore);
  const setActivePageCount = createActiveSetStateAction(setPageCount);
  const setActiveIsFetching = createActiveSetStateAction(setIsFetching);

  const fetchNextPage = useCallback(
    async (nextPage: number) => {
      try {
        const newPageData = await fetcherRef.current(nextPage);
        const hasNext = hasNextPage(newPageData.length, pageSize);

        infiniteListCache.set(cacheKey, {
          ...getCachedOrDefault(cacheKey),
          hasMore: hasNext,
          pageCount: nextPage,
        });

        setActiveHasMore(hasNext);
        setActivePageCount(nextPage);

        return newPageData;
      } catch (error) {
        const prevPageCount = nextPage - 1;

        infiniteListCache.set(cacheKey, {
          ...getCachedOrDefault(cacheKey),
          promisedPostPages: getCachedOrDefault(
            cacheKey,
          ).promisedPostPages.slice(0, -1),
          hasMore: true,
          pageCount: prevPageCount,
        });

        setActiveHasMore(true);
        setActivePageCount(prevPageCount);
        setActivePromisedPages((prev) => prev.slice(0, -1));
        throw error;
      } finally {
        setActiveIsFetching(false);
      }
    },
    [
      cacheKey,
      getCachedOrDefault,
      pageSize,
      setActiveHasMore,
      setActivePageCount,
      setActivePromisedPages,
      setActiveIsFetching,
    ],
  );

  const handleIntersection = useEffectEvent(() => {
    if (isFetching || !hasMore) return;

    setIsFetching(true);
    const nextPage = pageCount + 1;
    const promise = fetchNextPage(nextPage);

    setPromisedPostPages((prev) => {
      const newPromises = [...prev, promise];
      infiniteListCache.set(cacheKey, {
        ...getCachedOrDefault(cacheKey),
        promisedPostPages: newPromises,
        pageCount: nextPage,
      });
      return newPromises;
    });
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
