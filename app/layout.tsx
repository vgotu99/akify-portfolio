import type { Metadata } from 'next';
import '@/src/app/style/global.css';
import BottomBar from '@/src/app/layout/bottom-bar';
import Footer from '@/src/app/layout/footer';
import Header from '@/src/app/layout/header';
import { poppins, pretendard } from '@/src/app/style/fonts';
import ChannelTalkProvider from '@/src/shared/ui/channel-talk-provider';
import '@/src/features/auth/lib/interceptors';
import { SpeedInsights } from '@vercel/speed-insights/next';
import GoogleAnalytics from '@/src/app/analytics/google-analytics';
import MetaPixel from '@/src/app/analytics/meta-pixel';
import UtmCapture from '@/src/app/analytics/utm-capture';
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
  verification: {
    other: {
      'facebook-domain-verification': '6ofz8rbavr4xz75z9krdfd1ikvcpdt',
      'naver-site-verification': '3b1b1bf076039e7bbd03becea5cfb55ad64252ad',
    },
  },
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
      <head>
        <ImageServerPreconnects />
        <UtmCapture />
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
        <MetaPixel />
        <GoogleAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
