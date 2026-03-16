import { fetchSearchedMerchandiseList } from '@/src/entities/merchandise/list/model/apis';
import SearchPage from '@/src/views/search/search-page';

interface SearchProps {
  searchParams: Promise<{ q: string }>;
}

export default async function Search({ searchParams }: SearchProps) {
  const { q } = await searchParams;
  const searchedMerchandiseList = await fetchSearchedMerchandiseList(q, 0);

  return <SearchPage searchedMerchandiseList={searchedMerchandiseList} q={q} />;
}
