import * as React from 'react';
import Link from 'next/link';
import { FaResearchgate } from 'react-icons/fa';
import { BsLink } from 'react-icons/bs';
import { SiGooglescholar } from 'react-icons/si';
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
    <div className="flex flex-col items-start w-full h-auto my-24 px-36">
      <div className="text-justify ml-4 mb-6 pb-3 border-b-1">
        <p>
          I'm also interested in doing research, as I feel it's a big part of my life.
          I always enjoy looking for novel solutions to diverse problems, in particular problems related to
          Machine Learning and Signal Processing.
        </p>
        <p className="pt-2">
        My first publication was in the field of signal processing for biomedical signal processing.
        I feel there's a lot of room to apply learning algorithms in the biomedical universe to continue learning
        about the human body as well as to enhance the skills of the healthcare experts.
        </p>
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
    </div>
  </>
);
