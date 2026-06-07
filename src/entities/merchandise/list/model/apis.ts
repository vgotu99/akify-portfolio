import type { MerchandiseListResponse } from '@/src/entities/merchandise/list/model/types';
import { httpClient } from '@/src/shared/lib/http-client';

const fetchMerchandiseList = async (page: number, size: number) => {
  const { data } = await httpClient.get<MerchandiseListResponse>(
    `/posts?page=${page}&size=${size}&sort=latest`,
    {
      fetchOptions: {
        cache: 'force-cache',
        next: {
          revalidate: 1800,
        },
      },
    },
  );

  return data;
};

export const fetchInitialMerchandiseList = async () => {
  const res = await fetchMerchandiseList(0, 32);

  return res;
};

export const fetchInfiniteMerchandiseList = async (page: number) => {
  const currentPage = page + 1;

  const res = await fetchMerchandiseList(currentPage, 16);

  return res;
};
