import '../styles/globals.scss'
import Navbar from '../components/header'
import Footer from '../components/footer'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className="bg-orange-50 dark:bg-zinc-800 dark:text-zinc-200">
        <Navbar />
        <main className="pt-[56px]">
          <article className="px-8 mx-auto max-w-2xl">
            {children}
          </article>
          <Footer />
        </main>
      </body>
    </html>
  );
}
