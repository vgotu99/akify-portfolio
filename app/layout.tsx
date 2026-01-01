import '@/app/style/global.css';
import { poppins, pretendard } from '@/src/app/style/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
