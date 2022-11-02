'use client'

import * as React from 'react';
import Link from 'next/link';
import { FaResearchgate as ResearchGate } from 'react-icons/fa';
import { BsLink } from 'react-icons/bs';
import { SiGooglescholar as GoogleScholar } from 'react-icons/si';
import { IoMdArrowForward } from 'react-icons/io';
import SocialWebsites from '../../lib/SocialWebsites';
import AnimatedLayout from '../../components/animated-layout';


const Anchor = ({ href }: { href: string }) => (
  <div className="opacity-0 mb-auto curosr-pointer mr-1 hover:opacity-100 hover:transition hover:duration-200 hover:ease-in-out pt-2">
    <Link href={href}>
      <BsLink />
    </Link>
  </div>
)

const Publication = ({ title, reference, href }: { title: string, reference: string, href: string }) => (
  <div className="flex flex-col">
    <p id="hss" className="font-mplus inline text-b-gray-200 font-semibold text-2xl">
      {title}
    </p>
    <p>
      {reference}
    </p>
    <Link
      href={href}
      className="pt-4 underline transform hover:translate-x-1 transition duration-200"
    >
      <span className="flex items-center"><IoMdArrowForward className="mr-1" /> Go to</span>
    </Link>
  </div>
)

export default (): React.ReactNode => (
  <AnimatedLayout>
      <section className="flex flex-col items-start">
        <div className="text-justify ml-4 mt-2 mb-6 pb-3 border-b border-solid">
          <p className="pt-2">
            I'm also interested in doing research, as I feel it's a big part of my life.
            I always enjoy looking for novel solutions to diverse problems, in particular problems related to
            Machine Learning and Signal Processing.
          </p>
          <p className="pt-2">
            My first publication was in the field of signal processing for biomedical signals.
            I feel there's a lot of room to apply learning algorithms in the biomedical universe to continue learning
            about the human body as well as to enhance the skills of the healthcare experts.
          </p>
          <div className="flex flex-col font-mplus">
            <span className="font-bold underline underline-offset-4 my-4">Research profiles</span>
            <Link href={SocialWebsites.GOOGLE_SCHOLAR} className="rounded-lg dark:hover:bg-zinc-600 hover:bg-zinc-200 hover:underline hover:underline-offset-4 decoration-blue-700 px-4 py-4 mr-auto flex flex-row items-center w-auto">
              <GoogleScholar className="[&>path]:fill-[#4285F4] mt-[2px] text-2xl" />
              <span className="ml-1 font-medium text-teal-500 dark:text-teal-300">@alvaro-gaona</span>
            </Link>
            <Link href={SocialWebsites.RESEARCH_GATE} className="rounded-lg dark:hover:bg-zinc-600 hover:bg-zinc-200 hover:underline hover:underline-offset-4 decoration-blue-700 px-4 py-4 mr-auto flex flex-row items-center">
              <ResearchGate className="[&>path]:fill-[#00CCBB] mt-[2px] text-2xl" />
              <span className="ml-1 font-medium text-teal-500 dark:text-teal-300">@Alvaro-Gaona</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-row">
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
      </section>
  </AnimatedLayout>
);
