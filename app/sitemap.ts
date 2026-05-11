import type { MetadataRoute } from 'next';
import { fetchMerchandiseListForSitemap } from '@/src/entities/seo/model/apis';

export const revalidate = 86400;

const PARALLEL_REQUESTS = 2;

const fetchAllMerchandiseListForSitemap = async (
  pageStart: number,
  baseUrl: string,
): Promise<MetadataRoute.Sitemap> => {
  const promises = Array.from({ length: PARALLEL_REQUESTS }).map((_, i) =>
    fetchMerchandiseListForSitemap(pageStart + i).catch((error) => {
      console.error(`sitemap 데이터 페칭 실패 ${pageStart + i}:`, error);
      return { content: [], last: true };
    }),
  );

  const results = await Promise.all(promises);

  const currentSitemaps: MetadataRoute.Sitemap = results.flatMap((result) =>
    result.content.map((item) => ({
      url: `${baseUrl}/merchandise/${item.postId}`,
      lastModified: new Date(item.modifiedAt),
      changeFrequency: 'daily',
      priority: 0.8,
    })),
  );

  const isLast = results.some((result) => result.last);

  if (isLast) {
    return currentSitemaps;
  }

  const nextSitemaps = await fetchAllMerchandiseListForSitemap(
    pageStart + PARALLEL_REQUESTS,
    baseUrl,
  );

  return [...currentSitemaps, ...nextSitemaps];
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://web.akify.io';

  const defaultRoute: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  try {
    const merchandiseRoutes = await fetchAllMerchandiseListForSitemap(
      0,
      baseUrl,
    );

    return [...defaultRoute, ...merchandiseRoutes];
  } catch (error) {
    console.error('merchandise 경로 생성 실패 :', error);

    return defaultRoute;
  }
}
