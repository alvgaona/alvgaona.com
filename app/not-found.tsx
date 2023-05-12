import { useTranslations } from 'next-intl';
import Link from 'next/link';
import * as React from 'react';
import AnimatedLayout from './components/animated-layout';

const NotFound = (): React.ReactNode => {
  const t = useTranslations();

  return (
    <AnimatedLayout>
      <main className="pt-[56px]">
        <article className="mx-auto max-w-2xl px-8">
          <div className="my-24 flex flex-col items-center justify-center">
            <h1 className="text-center font-mplus text-2xl font-bold">
              {t('notFound.title')}
            </h1>
            <p className="text-md border-b-1 mt-4 border-solid px-4 pb-4">
              {t('notFound.subtitle')}
            </p>
            <Link
              href="/"
              className="rounded-lg bg-teal-500 p-4 font-mplus font-normal leading-5 text-white outline-none transition-colors duration-500 hover:bg-teal-600"
            >
              {t('root.takeMeHome')}
            </Link>
          </div>
        </article>
      </main>
    </AnimatedLayout>
  );
};

export default NotFound;
