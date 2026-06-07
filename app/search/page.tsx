import type { Metadata } from 'next';
import { fetchSearchedMerchandiseList } from '@/src/features/search/model/apis';
import SearchPage from '@/src/views/search/search-page';

interface SearchProps {
  searchParams: Promise<{ q: string }>;
}

export async function generateMetadata({
  searchParams,
}: SearchProps): Promise<Metadata> {
  const { q } = await searchParams;

  return {
    title: q ? `'${q}' 검색 결과` : '검색',
    description: q
      ? `'${q}'에 대한 검색 결과입니다.`
      : '원하는 악기를 검색해보세요.',
  };
}

export default async function Search({ searchParams }: SearchProps) {
  const { q } = await searchParams;
  const searchedMerchandiseList = await fetchSearchedMerchandiseList(q, 0);

  return <SearchPage searchedMerchandiseList={searchedMerchandiseList} q={q} />;
}
