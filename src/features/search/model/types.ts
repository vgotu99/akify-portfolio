import type { BaseApiResponse } from '@/src/shared/lib/types';

export type UnifiedSuggestionsResponse =
  BaseApiResponse<UnifiedSuggestionsData>;

export interface UnifiedSuggestionsData {
  recentSearchSuggestions: Array<string>;
  brandSuggestions: Array<BrandSuggestion>;
  modelSuggestions: Array<ModelSuggestion>;
}

export interface BrandSuggestion extends BaseSuggestion {
  type: 'brand';
}

export interface ModelSuggestion extends BaseSuggestion {
  type: 'product';
  brandName: string;
  categoryKorName: string;
  categoryId: number;
}

interface BaseSuggestion {
  text: string;
  id: string;
  brandId: number;
  brandNameKo: string;
  brandName: string;
}
