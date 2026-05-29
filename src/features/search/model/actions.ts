'use server';

import { redirect } from 'next/navigation';
import {
  fetchSearchedMerchandiseList,
  fetchUnifiedSuggestions,
} from '@/src/features/search/model/apis';

export const searchAction = async (formData: FormData) => {
  const q = formData.get('q')?.toString().trim().replace(/\s+/g, ' ');

  if (!q) return;

  redirect(`/search?q=${encodeURIComponent(q)}`);
};

export const fetchMoreSearchedMerchandiseAction = async (
  query: string,
  page: number,
) => {
  const response = await fetchSearchedMerchandiseList(query, page);

  return response.data.posts;
};

export const fetchUnifiedSuggestionsAction = async (
  _prevState: any,
  query: string,
) => {
  if (!query.trim().replace(/\s+/g, ' ')) return null;

  const { data } = await fetchUnifiedSuggestions(query);

  return data;
};
