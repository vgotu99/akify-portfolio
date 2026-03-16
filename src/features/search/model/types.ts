import type { BaseApiResponse } from '@/src/shared/lib/types';

export type UnifiedSuggestionsResponse =
  BaseApiResponse<UnifiedSuggestionsData>;

export interface UnifiedSuggestionsData {
  recentSearchSuggestions: Array<string>;
  brandSuggestions: Array<BrandSuggestion>;
  modelSuggestions: Array<ModelSuggestion>;
}

export interface BrandSuggestion {
  text: string;
  type: 'brand';
  id: string;
  brandNameKo: string;
}

export interface ModelSuggestion {
  text: string;
  type: 'model';
  id: string;
  brandId: number;
  brandNameKo: string;
  brandName: string;
}
