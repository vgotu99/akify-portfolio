import axios from 'axios';
import type { MerchandiseListForSitemapResponse } from '@/src/entities/seo/model/types';
import { issueAnonToken } from '@/src/features/auth/model/apis';

export const fetchMerchandiseListForSitemap = async (page: number) => {
  const token = await issueAnonToken('akify-web-sitemap');
  const { data } = await axios.get<MerchandiseListForSitemapResponse>(
    `${process.env.API_URL}/search/posts/sync?page=${page}&size=300`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return { content: data.data.content, last: data.data.last };
};
