import Link from 'next/link';
import * as React from 'react';
import AnimatedLayout from '../components/animated-layout';

const NotFound = (): React.ReactNode => (
  <AnimatedLayout>
    <main className="pt-[56px]">
      <article className="mx-auto max-w-2xl px-8">
        <div className="my-24 flex flex-col items-center justify-center">
          <h1 className="font-mplus text-2xl font-bold text-center">
            Oops! The page you were looking for has gone on a spontaneous adventure and hasn&apos;t returned yet.
          </h1>
          <p className="text-md border-b-1 mt-4 border-solid px-4 pb-4">
            Please try a different path for now while we search for it.
          </p>
          <Link
            href="/"
            className="rounded-lg bg-teal-500 p-4 font-mplus font-normal leading-5 text-white outline-none transition-colors duration-500 hover:bg-teal-600"
          >
            Take me home
          </Link>
        </div>
      </article>
    </main>
  </AnimatedLayout>
);

export default NotFound;
