import type { Metadata, ResolvingMetadata } from 'next';
import { fetchMerchandiseDetail } from '@/src/entities/merchandise/detail/model/apis';
import { fetchInitialMerchandiseList } from '@/src/entities/merchandise/list/model/apis';
import { handleMetadataSoft404 } from '@/src/shared/lib/soft-404';
import { withSoft404 } from '@/src/shared/ui/not-found';
import MerchandiseDetailPage from '@/src/views/merchandise-detail/merchandise-detail-page';

export const revalidate = false;

export const generateStaticParams = async () => {
  try {
    const list = await fetchInitialMerchandiseList();

    return list.data.posts.map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error('[generateStaticParams] 최신 상품 목록 로딩 실패:', error);

    return [];
  }
};

interface MerchandiseDetailProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async (
  { params }: MerchandiseDetailProps,
  global: ResolvingMetadata,
): Promise<Metadata> => {
  const { id } = await params;
  try {
    const merchandiseDetail = await fetchMerchandiseDetail(id);
    const detailData = merchandiseDetail.data;

    const globalOpenGraph = (await global).openGraph || {};
    const globalTwitter = (await global).twitter || {};
    const previousKeywords = (await global).keywords || [];

    const dynamicKeywords = [
      detailData.modelResponse.brandName,
      detailData.modelResponse.brandKorName,
      detailData.modelResponse.modelName,
    ];

    return {
      title: detailData.title,
      description: detailData.description || detailData.title,
      keywords: [...previousKeywords, ...dynamicKeywords],
      openGraph: {
        ...globalOpenGraph,
        title: detailData.title,
        description: detailData.description || detailData.title,
        images: detailData.postImages[0],
      },
      twitter: {
        ...globalTwitter,
        title: detailData.title,
        description: detailData.description || detailData.title,
      },
    };
  } catch (error) {
    return handleMetadataSoft404(error);
  }
};

async function MerchandiseDetail({ params }: MerchandiseDetailProps) {
  const { id } = await params;
  const merchandiseDetail = await fetchMerchandiseDetail(id);
  const merchandiseDetailData = merchandiseDetail.data;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: merchandiseDetailData.title,
    image:
      merchandiseDetailData.postImages?.[0] ||
      'https://web.akify.io/opengraph-image.jpg',
    description: merchandiseDetailData.description,
    offers: {
      '@type': 'Offer',
      price: merchandiseDetailData.price,
      priceCurrency: 'KRW',
      availability:
        merchandiseDetailData.saleStatus === 'ON_SALE'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MerchandiseDetailPage merchandiseDetailData={merchandiseDetailData} />
    </div>
  );
}

export default withSoft404(MerchandiseDetail);
