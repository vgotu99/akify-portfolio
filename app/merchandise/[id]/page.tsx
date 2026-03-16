import { fetchMerchandiseDetail } from '@/src/entities/merchandise/detail/model/apis';
import MerchandiseDetailMobilePage from '@/src/views/merchandise-detail/merchandise-detail-mobile-page';
import MerchandiseDetailPage from '@/src/views/merchandise-detail/merchandise-detail-page';

interface MerchandiseDetailProps {
  params: Promise<{ id: string }>;
}

export default async function MerchandiseDetail({
  params,
}: MerchandiseDetailProps) {
  const { id } = await params;

  const merchandiseDetail = await fetchMerchandiseDetail(id);

  return (
    <>
      <MerchandiseDetailMobilePage merchandiseDetail={merchandiseDetail} />
      <MerchandiseDetailPage merchandiseDetail={merchandiseDetail} />
    </>
  );
}
