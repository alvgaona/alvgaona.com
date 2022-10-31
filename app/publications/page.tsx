import * as React from 'react';
import Link from 'next/link';
import { FaResearchgate as ResearchGate } from 'react-icons/fa';
import { BsLink } from 'react-icons/bs';
import { SiGooglescholar as GoogleScholar } from 'react-icons/si';
import { IoMdArrowForward } from 'react-icons/io';
import SocialWebsites from '../../lib/SocialWebsites';


const Anchor = ({ href }: { href: string }) => (
  <div className="opacity-0 mb-auto curosr-pointer mr-1 hover:opacity-100 hover:transition hover:duration-200 hover:ease-in-out pt-2">
    <Link href={href}>
      <BsLink />
    </Link>
  </div>
)

const Publication = ({ title, reference, href}: { title: string, reference: string, href: string}) => (
  <div className="flex flex-col">
    <p id="hss" className="font-mplus inline text-b-gray-200 font-semibold text-2xl">
      {title}
    </p>
    <p>
      {reference}
    </p>
    <Link
      href={href}
      className="pb-12 pt-4 hover:text-black underline transform hover:translate-x-1 transition duration-200"
    >
      <span className="flex items-center"><IoMdArrowForward className="mr-1" /> Go to</span>
    </Link>
  </div>
)

export default (): React.ReactNode => (
  <>
    <section className="flex flex-col items-start">
      <div className="text-justify ml-4 mb-6 pb-3 border-b border-solid">
        <p className="">
          I'm also interested in doing research, as I feel it's a big part of my life.
          I always enjoy looking for novel solutions to diverse problems, in particular problems related to
          Machine Learning and Signal Processing.
        </p>
        <p className="pt-2">
        My first publication was in the field of signal processing for biomedical signal processing.
        I feel there's a lot of room to apply learning algorithms in the biomedical universe to continue learning
        about the human body as well as to enhance the skills of the healthcare experts.
        </p>
        <div className="flex flex-col font-mplus">
          <span className="font-bold underline underline-offset-4 decorate-blue my-4">Research profiles</span>
          <p className="rounded-lg hover:bg-gray-200 hover:underline hover:underline-offset-4 px-4 py-4 mr-auto">
            <Link href={SocialWebsites.GOOGLE_SCHOLAR} className="flex flex-row items-center w-auto">
              <GoogleScholar className="[&>path]:fill-[#4285F4] mt-[2px] text-2xl"/>
              <span className="ml-1 font-medium text-teal-600">@alvaro-gaona</span>
            </Link>
          </p>
          <p className="rounded-lg hover:bg-gray-200 hover:underline hover:underline-offset-4 px-4 py-4 mr-auto">
            <Link href={SocialWebsites.RESEARCH_GATE} className="flex flex-row items-center">
              <ResearchGate className="[&>path]:fill-[#00CCBB] mt-[2px] text-2xl"/>
              <span className="ml-1 font-medium text-teal-600">@Alvaro-Gaona</span>
            </Link>
          </p>
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
  </>
);
