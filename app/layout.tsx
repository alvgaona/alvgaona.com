'use client';

import localFont from 'next/font/local';
import '../styles/globals.scss';
import Footer from './components/footer';
import Header from './components/header';

const mplus = localFont({
  src: [
    {
      path: '../public/fonts/MPLUSRounded1c-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/MPLUSRounded1c-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/MPLUSRounded1c-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MPLUSRounded1c-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/MPLUSRounded1c-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/MPLUSRounded1c-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/MPLUSRounded1c-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-mplus',
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en" className={mplus.variable}>
      <body className="bg-orange-50 dark:bg-zinc-800 dark:text-zinc-200">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
