import type { MerchandiseListResponse } from '@/src/entities/merchandise/list/model/types';
import type { UnifiedSuggestionsResponse } from '@/src/features/search/model/types';
import { httpClient } from '@/src/shared/lib/http-client';

export const fetchSearchedMerchandiseList = async (
  keyword: string,
  page: number,
) => {
  const { data } = await httpClient.get<MerchandiseListResponse>(
    `/search/posts?page=${page}&keyword=${keyword}&size=16&sort=relevance`,
  );

  return data;
};

export const fetchUnifiedSuggestions = async (query: string) => {
  const { data } = await httpClient.get<UnifiedSuggestionsResponse>(
    `recent-searches/unified-suggestions?input=${query}`,
  );

  return data;
};
