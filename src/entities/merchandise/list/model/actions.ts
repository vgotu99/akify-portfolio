'use server';

import { fetchInfiniteMerchandiseList } from '@/src/entities/merchandise/list/model/apis';

export const fetchMoreMerchandiseAction = async (page: number) => {
  const response = await fetchInfiniteMerchandiseList(page);

  return response.data.posts;
};
