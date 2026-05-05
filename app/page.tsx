import type { BannerListResponse } from '@/src/entities/banner/model/types';
import { fetchInitialMerchandiseList } from '@/src/entities/merchandise/list/model/apis';
import MainPage from '@/src/views/main/main-page';

export default async function Main() {
  const merchandiseList = await fetchInitialMerchandiseList();
  const bannerList = BANNER_MOCK;
  // const [merchandiseList, bannerList] = await Promise.all([
  //   fetchInitialMerchandiseList(),
  //   fetchBannerList(),
  // ]);

  return <MainPage merchandiseList={merchandiseList} bannerList={bannerList} />;
}

const BANNER_MOCK: BannerListResponse = {
  status: 200,
  code: 'mock',
  msg: 'mock',
  detailMsg: 'mock',
  data: [
    {
      id: '1',
      imageUrl: {
        mobile:
          'https://akify-public-assets-672421064119-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/temp-banner-image-1.jpg',
        desktop:
          'https://akify-public-assets-672421064119-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/temp-banner-image-desktop-1.jpg',
      },
      title: '악기 거래를 더 쉽게',
      subtitle: '악기 거래의 새로운 시작, 아키파이',
      order: 1,
      actionType: 'EXTERNAL',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
      href: 'https://akify.io/wv/about-akify',
    },
    {
      id: '2',
      imageUrl: {
        mobile:
          'https://akify-public-assets-672421064119-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/temp-banner-image-2.jpg',
        desktop:
          'https://akify-public-assets-672421064119-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/temp-banner-image-desktop-2.jpg',
      },
      title: '원스톱 서비스',
      subtitle: '비대면 악기 거래, 포장·배송까지 완벽하게',
      order: 2,
      actionType: 'EXTERNAL',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
      href: 'https://akify.io/wv/onestop',
    },
    {
      id: '3',
      imageUrl: {
        mobile:
          'https://akify-public-assets-672421064119-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/temp-banner-image-3.jpg',
        desktop:
          'https://akify-public-assets-672421064119-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/temp-banner-image-desktop-3.jpg',
      },
      title: '매입 서비스',
      subtitle: '내 이펙터를 빠르게 팔고 싶다면',
      order: 3,
      actionType: 'EXTERNAL',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
      href: 'https://akify.io/wv/pre-purchase',
    },
    {
      id: '4',
      imageUrl: {
        mobile:
          'https://akify-public-assets-672421064119-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/temp-banner-image-4.jpg',
        desktop:
          'https://akify-public-assets-672421064119-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/temp-banner-image-desktop-4.jpg',
      },
      title: '개국공신 이벤트',
      subtitle: '아키파이 대규모 업데이트 기념 이벤트',
      order: 4,
      actionType: 'EXTERNAL',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
      href: 'https://akify.io/wv/v2-release-event',
    },
    {
      id: '5',
      imageUrl: {
        mobile:
          'https://akify-public-assets-672421064119-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/temp-banner-image-5.jpg',
        desktop:
          'https://akify-public-assets-672421064119-ap-northeast-2-an.s3.ap-northeast-2.amazonaws.com/temp-banner-image-desktop-5.jpg',
      },
      title: '피드백 환영입니다',
      subtitle: '오류·버그·사용성 개선 제보',
      order: 5,
      actionType: 'EXTERNAL',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
      href: 'https://akify.io/wv/feedback',
    },
  ],
};
