import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    { path: '../../shared/assets/fonts/Pretendard-Thin.woff2', weight: '100' },
    {
      path: '../../shared/assets/fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
    },
    { path: '../../shared/assets/fonts/Pretendard-Light.woff2', weight: '300' },
    {
      path: '../../shared/assets/fonts/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../shared/assets/fonts/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../shared/assets/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    { path: '../../shared/assets/fonts/Pretendard-Bold.woff2', weight: '700' },
    {
      path: '../../shared/assets/fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
    },
    { path: '../../shared/assets/fonts/Pretendard-Black.woff2', weight: '900' },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});
