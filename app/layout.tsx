import type { Metadata } from 'next';
import '@/src/app/style/global.css';
import BottomBar from '@/src/app/layout/bottom-bar';
import Footer from '@/src/app/layout/footer';
import Header from '@/src/app/layout/header';
import { poppins, pretendard } from '@/src/app/style/fonts';
import '@/src/features/auth/lib/interceptors';

export const metadata: Metadata = {
  title: {
    template: '아키파이 | %s',
    default: '아키파이',
  },
  description: '악기 거래를 위한 가장 확실한 방법, 아키파이',
  keywords: ['악기', '중고악기', '악기거래', 'Akify', '아키파이'],
  openGraph: {
    title: '아키파이',
    description: '악기 거래를 위한 가장 확실한 방법, 아키파이',
    siteName: '아키파이',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '아키파이',
    description: '악기 거래를 위한 가장 확실한 방법, 아키파이',
  },
  metadataBase: new URL('https://web.akify.io'),
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
        {modal}
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
