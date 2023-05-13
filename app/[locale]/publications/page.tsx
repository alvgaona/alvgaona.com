'use client'

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BsLink } from 'react-icons/bs';
import { FaResearchgate as ResearchGate } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import { SiGooglescholar as GoogleScholar } from 'react-icons/si';

const Anchor = ({ href }: { href: string }): JSX.Element => (
  <div className="mb-auto mr-1 cursor-pointer pt-2 opacity-0 hover:opacity-100 hover:transition hover:duration-200 hover:ease-in-out">
    <Link href={href}>
      <BsLink />
    </Link>
  </div>
);

const Publication = ({ title, reference, href }: { title: string; reference: string; href: string }): JSX.Element => {
  const t = useTranslations('publications');

  return (
    <div className="flex flex-col">
      <p id="hss" className="text-b-gray-200 inline font-mplus text-2xl font-semibold">
        {title}
      </p>
      <p className="text-justify">{reference}</p>
      <Link
        href={href}
        className="transform pt-4 underline underline-offset-4 transition duration-200 hover:translate-x-1"
      >
        <span className="flex items-center">
          <IoMdArrowForward className="mr-1" /> {t('goTo')}
        </span>
      </Link>
    </div>
  );
};

const Publications = (): React.ReactNode => {
  const t = useTranslations('publications');

  return (
    <section className="flex flex-col items-start">
      <div className="mb-6 ml-4 mt-2 border-b border-solid pb-3 text-justify">
        <p className="pt-2">{t('intro.0')}</p>
        <p className="pt-2">{t('intro.1')}</p>
        <p className="pt-2">{t('intro.2')}</p>
        <div className="flex flex-col font-mplus">
          <span className="my-4 font-bold underline underline-offset-4">{t('researchProfiles.title')}</span>
          <Link
            href="https://www.researchgate.net/profile/Alvaro-Gaona"
            className="mr-auto flex w-auto flex-row items-center rounded-lg px-4 py-4 decoration-blue-700 hover:bg-zinc-200 hover:underline hover:underline-offset-4 dark:hover:bg-zinc-600"
          >
            <GoogleScholar className="mt-[2px] text-2xl [&>path]:fill-[#4285F4]" />
            <span className="ml-1 font-medium text-teal-500 dark:text-teal-300">@alvaro-gaona</span>
          </Link>
          <Link
            href="https://scholar.google.com/citations?user=unBAfxAAAAAJ"
            className="mr-auto flex flex-row items-center rounded-lg px-4 py-4 decoration-blue-700 hover:bg-zinc-200 hover:underline hover:underline-offset-4 dark:hover:bg-zinc-600"
          >
            <ResearchGate className="mt-[2px] text-2xl [&>path]:fill-[#00CCBB]" />
            <span className="ml-1 font-medium text-teal-500 dark:text-teal-300">@Alvaro-Gaona</span>
          </Link>
        </div>
      </div>
      <div className="ml-4 flex flex-col">
        <div>
          <Anchor href="/publication#prototyping-multirotor" />
          <Publication
            title="Prototyping of a multirotor UAV for precision landing under rotor failures"
            reference="A. J. Gaona, C. D. Pose, J. I. Giribet, R. Bunge, ”Prototyping of a multirotor UAV for precision landing under rotor failures”. Jornadas Argentinas de Robótica 2022 (JAR XI). Bariloche, Argentina"
            href="https://www.researchgate.net/publication/370604067_Prototyping_of_a_multirotor_UAV_for_precision_landing_under_rotor_failures#fullTextFileContent"
          />
        </div>
        <div>
          <Anchor href="/publication#heart-sounds-segmentation" />
          <Publication
            title="Deep Recurrent Learning for Heart Sound Segmentation based on
          Instantaneous Frequency Features"
            reference="A. J. Gaona, P. D. Arini, ”Deep Recurrent Learning for Heart Sounds Segmentation
          based on Instantaneous Frequency Features”. Revista Elektron, Vol. 4, No. 2,
          pp 52‑57 (2020)."
            href="http://elektron.fi.uba.ar/index.php/elektron/article/view/101/212"
          />
        </div>
      </div>
    </section>
  );
};

export default Publications;
