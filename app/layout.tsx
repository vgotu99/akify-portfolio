import '@/src/app/style/global.css';
import BottomBar from '@/src/app/layout/bottom-bar';
import Footer from '@/src/app/layout/footer';
import Header from '@/src/app/layout/header';
import { poppins, pretendard } from '@/src/app/style/fonts';

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
