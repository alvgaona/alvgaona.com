'use client'

import '../styles/globals.scss'
import Navbar from '../components/header'
import Footer from '../components/footer'
import { M_PLUS_Rounded_1c } from '@next/font/google'

const M_PLUS_ROUNDED_1C = M_PLUS_Rounded_1c({
  variable: '--font-mplus',
  weight: ['100', '300', '400', '500', '700', '800', '900'],
  display: 'fallback',
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: { children: React.ReactNode; }): React.ReactNode {
  return (
    <html lang="en" className={M_PLUS_ROUNDED_1C.variable}>
      <body className="bg-orange-50 dark:bg-zinc-800 dark:text-zinc-200">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
