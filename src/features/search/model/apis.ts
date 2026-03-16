import type { UnifiedSuggestionsResponse } from '@/src/features/search/model/types';
import { httpClient } from '@/src/shared/lib/http-client';

export const fetchUnifiedSuggestions = async (query: string) => {
  const { data } = await httpClient.get<UnifiedSuggestionsResponse>(
    `recent-searches/unified-suggestions?input=${query}`,
  );

  return data;
};
