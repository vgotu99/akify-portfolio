'use client';

import { use } from 'react';
import type { MerchandiseListPosts } from '@/src/entities/merchandise/list/model/types';
import MerchandiseCardVertical from '@/src/entities/merchandise/list/ui/merchandise-card-vertical';

interface InfiniteMerchandiseListProps {
  promisedPostPage: Promise<MerchandiseListPosts>;
}

export default function InfiniteMerchandiseList({
  promisedPostPage,
}: InfiniteMerchandiseListProps) {
  const postPage = use(promisedPostPage);

  return postPage.map((post) => (
    <MerchandiseCardVertical key={post.id} merchandise={post} />
  ));
}
