import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const pretendard = localFont({
  src: '../../shared/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  weight: '45 920',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});
