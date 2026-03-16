import { useCallback, useEffectEvent, useState, useTransition } from 'react';
import { fetchMoreMerchandiseAction } from '@/src/entities/merchandise/list/model/actions';
import type { MerchandiseListPosts } from '@/src/entities/merchandise/list/model/types';

export const useInfiniteMerchandise = () => {
  const [posts, setPosts] = useState<MerchandiseListPosts>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleIntersection = useEffectEvent(async () => {
    if (isPending || !hasMore) return;

    startTransition(async () => {
      try {
        const nextPage = page + 1;
        const newPosts = await fetchMoreMerchandiseAction(nextPage);

        if (newPosts.length === 0) {
          setHasMore(false);
        } else {
          setPosts((prev) => [...prev, ...newPosts]);
          setPage(nextPage);
        }
      } catch (error) {
        console.error('Failed to load more posts:', error);
      }
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
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return {
    posts,
    hasMore,
    sentinelRef,
  };
};
