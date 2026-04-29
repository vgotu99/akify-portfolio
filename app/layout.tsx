import type { Metadata } from 'next';
import '@/src/app/style/global.css';
import BottomBar from '@/src/app/layout/bottom-bar';
import Footer from '@/src/app/layout/footer';
import Header from '@/src/app/layout/header';
import { poppins, pretendard } from '@/src/app/style/fonts';
import ChannelTalkProvider from '@/src/shared/ui/channel-talk-provider';
import '@/src/features/auth/lib/interceptors';
import { GoogleAnalytics } from '@next/third-parties/google';
import ImageServerPreconnects from '@/src/app/layout/image-server-preconnects';
import { flex } from '@/styled-system/patterns';

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
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const isGaTrackingEnabled = process.env.NODE_ENV === 'production' && GA_ID;

  return (
    <html lang="ko" className={`${pretendard.variable} ${poppins.variable}`}>
      <head>
        <ImageServerPreconnects />
      </head>
      <body className={flex({ flexDirection: 'column', minHeight: '100dvh' })}>
        <Header />
        <main className={flex({ flex: 1, flexDirection: 'column' })}>
          {children}
        </main>
        {modal}
        <Footer />
        <BottomBar />
        <ChannelTalkProvider />
      </body>
      {isGaTrackingEnabled && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
