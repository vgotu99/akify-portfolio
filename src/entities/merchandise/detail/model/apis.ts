import type { MerchandiseDetailResponse } from '@/src/entities/merchandise/detail/model/types';
import { httpClient } from '@/src/shared/lib/http-client';

export const fetchMerchandiseDetail = async (id: string) => {
  const { data } = await httpClient.get<MerchandiseDetailResponse>(
    `/posts/${id}`,
    {
      fetchOptions: {
        cache: 'force-cache',
      },
    },
  );

  return data;
};
