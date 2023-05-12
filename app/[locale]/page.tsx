import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import alvgaona from '../../public/alvgaona.jpg';

import { useLocale, useTranslations } from 'next-intl';

const Home = (): React.ReactNode => {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <>
      <section className="flex flex-col items-start gap-6">
        <div className="mt-6 flex w-full flex-row items-center justify-around">
          <div className="flex flex-col">
            <span className="mb-1 font-mplus text-5xl font-bold">Alvaro Gaona</span>
            <p>{t('role')}</p>
          </div>
          <Image className="h-32 w-auto self-end rounded-full" alt="avatar" src={alvgaona} priority />
        </div>
        <div className="flex w-full flex-row justify-center">
          <span className="border-1 my-5 rounded-md bg-gray-800 px-12 py-4 font-mplus text-sm font-medium text-white dark:bg-gray-600">
            {t('greet')}{' '}
            {locale != 'jp' ? (
              <Link
                className="text-sky-300 underline underline-offset-4"
                href="https://en.wikipedia.org/wiki/Argentina"
              >
                Argentina.
              </Link>
            ) : null}
            📍
          </span>
        </div>
      </section>
      <section className="flex flex-col items-start justify-start">
        <div className="mt-6 flex w-full flex-col gap-6">
          <span className="font-mplus text-xl font-bold underline underline-offset-4">{t('background.title')}</span>
          <p className="text-justify">
            {t('background.content.first')}{' '}
            <Link
              className="underline decoration-orange-300 underline-offset-4 hover:animate-pulse"
              href="https://github.com/pytorch/pytorch/search?q=is%3Apr+author%3Aalvgaona+author%3Aalvarogaona&type=issues"
            >
              {t('checkThemOut')}
            </Link>
          </p>
          <p className="text-justify">{t('background.content.second')}</p>
          <p className="text-justify">
            {t('background.content.third')}
            <br />
            <Link
              href="https://github.com/discordcf/discordcf"
              className="mt-2 inline-flex flex-row items-center text-orange-500 underline underline-offset-4 hover:animate-pulse"
            >
              {t('learnMore')} <IoMdArrowForward className="ml-1 mt-1 self-center" />
            </Link>
          </p>
          <Link
            href="/projects"
            className="border-1 justify-center self-center rounded-lg bg-teal-500 px-8 py-2 font-mplus font-medium text-white transition-colors duration-500 hover:bg-teal-600 hover:text-white"
          >
            {t('viewProjects')}
          </Link>
          <p className="text-justify">
            {t('background.content.fourth')}
            <br />
            <Link
              href="/publications"
              className="mt-2 inline-flex flex-row items-center text-orange-500 underline underline-offset-4 hover:animate-pulse"
            >
              {t('learnMore')} <IoMdArrowForward className="ml-1 mt-1 self-center" />
            </Link>
          </p>
        </div>
        <div className="mt-6 flex w-full flex-col">
          <span className="mb-4 font-mplus text-xl font-bold underline underline-offset-4">{t('freeTime.title')}</span>
          <p className="text-justify">{t('freeTime.content')}</p>
        </div>
        <div className="mt-6 flex w-full flex-col">
          <span className="mb-4 font-mplus text-xl font-bold underline underline-offset-4">
            {t('lifeTimeline.title')}
          </span>
          <div className="flex flex-row">
            <span className="mr-4 font-mplus font-medium">1991</span>
            {t('lifeTimeline.content.1991')}
          </div>
          <div className="flex flex-row">
            <span className="mr-4 font-mplus font-medium">2015</span>
            {t('lifeTimeline.content.2015')}
          </div>
          <div className="flex flex-row">
            <span className="mr-4 font-mplus font-medium">2019</span>
            <span>
              {locale != 'jp' ? t('lifeTimeline.content.2019.first') : t('lifeTimeline.content.2019.full')}{' '}
              {locale != 'jp' ? <Link
                href="https://www.fi.uba.ar/"
                className="underline decoration-orange-300 underline-offset-4 hover:animate-pulse"
              >
                {t('lifeTimeline.content.2019.second')}
              </Link> : null}
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="mr-4 font-mplus font-medium">2019</span>
            {t('lifeTimeline.content.2019bis')}
          </div>
          <div className="flex flex-row items-center">
            <span className="mr-4 font-mplus font-medium">2022</span>
            {t('lifeTimeline.content.2022')}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
