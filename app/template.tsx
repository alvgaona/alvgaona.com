'use client'

import Navbar from '../components/header'
import Footer from '../components/footer'
import AnimatedLayout from '../components/animated-layout'

export default function Template({
  // Templates must accept a children prop.
  // This will be populated with nested layouts, templates or pages
  children,
}: { children: React.ReactNode; }) {
  return (
    <>
      <Navbar />
      <AnimatedLayout>
        <main className="pt-[56px]">
          <article className="px-8 mx-auto max-w-2xl">
            {children}
          </article>
        </main>
      </AnimatedLayout>
      <Footer />
    </>
  );
}
