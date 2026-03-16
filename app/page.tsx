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
      imageUrl:
        'https://akify-upload-files.s3.ap-northeast-2.amazonaws.com/post/8cb6c6d1-57c0-4e77-9660-75ecd108b169.jpg',
      title: '1번 배너 타이틀',
      subtitle: '1번 배너 서브 타이틀',
      order: 1,
      actionType: 'IN_APP',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: '2',
      imageUrl:
        'https://akify-upload-files.s3.ap-northeast-2.amazonaws.com/post/eeddb749-983a-415c-a80d-14af4dc9fa7e.jpg',
      title: '2번 배너 타이틀',
      subtitle: '2번 배너 서브 타이틀',
      order: 2,
      actionType: 'IN_APP',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: '3',
      imageUrl:
        'https://akify-upload-files.s3.ap-northeast-2.amazonaws.com/post/733d7ec0-a219-4398-8bf2-8849e3edb9f6.jpg',
      title: '3번 배너 타이틀',
      subtitle: '3번 배너 서브 타이틀',
      order: 3,
      actionType: 'IN_APP',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: '4',
      imageUrl:
        'https://akify-upload-files.s3.ap-northeast-2.amazonaws.com/post/99fd9a5d-da79-4277-b17e-f416647cda42.jpg',
      title: '4번 배너 타이틀',
      subtitle: '4번 배너 서브 타이틀',
      order: 4,
      actionType: 'IN_APP',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: '5',
      imageUrl:
        'https://akify-upload-files.s3.ap-northeast-2.amazonaws.com/post/788f8729-c71f-44d0-9a9a-2ad9d461b1ab.jpg',
      title: '5번 배너 타이틀',
      subtitle: '5번 배너 서브 타이틀',
      order: 5,
      actionType: 'IN_APP',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: '6',
      imageUrl:
        'https://akify-upload-files.s3.ap-northeast-2.amazonaws.com/post/8f014259-02ac-4574-920a-ae56cbecdcc2.jpg',
      title: '6번 배너 타이틀',
      subtitle: '6번 배너 서브 타이틀',
      order: 6,
      actionType: 'IN_APP',
      actionValue: '1',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z',
    },
  ],
};
