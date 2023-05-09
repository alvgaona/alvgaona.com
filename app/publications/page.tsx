import Link from "next/link";
import { FaResearchgate as ResearchGate } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { SiGooglescholar as GoogleScholar } from "react-icons/si";
import { IoMdArrowForward } from "react-icons/io";

const Anchor = ({ href }: { href: string }): JSX.Element => (
  <div className="mb-auto mr-1 cursor-pointer pt-2 opacity-0 hover:opacity-100 hover:transition hover:duration-200 hover:ease-in-out">
    <Link href={href}>
      <BsLink />
    </Link>
  </div>
);

const Publication = ({
  title,
  reference,
  href,
}: {
  title: string;
  reference: string;
  href: string;
}): JSX.Element => (
  <div className="flex flex-col">
    <p
      id="hss"
      className="text-b-gray-200 inline font-mplus text-2xl font-semibold"
    >
      {title}
    </p>
    <p className="text-justify">{reference}</p>
    <Link
      href={href}
      className="transform pt-4 underline underline-offset-4 transition duration-200 hover:translate-x-1"
    >
      <span className="flex items-center">
        <IoMdArrowForward className="mr-1" /> Go to
      </span>
    </Link>
  </div>
);

const Publications = (): React.ReactNode => (
  <section className="flex flex-col items-start">
    <div className="ml-4 mt-2 mb-6 border-b border-solid pb-3 text-justify">
      <p className="pt-2">
        Research is a passion of mine, and I consider it a significant component
        of my life. I relish the challenge of discovering original solutions to
        complex problems, with a particular focus on the fascinating fields of
        Control Systems, Signal Processing, and Machine Learning.
      </p>
      <p className="pt-2">
        My journey into research began with my first publication in the field of
        signal processing for biomedical signals. I firmly believe that there is
        a wealth of untapped potential in applying learning algorithms within
        the biomedical universe. Not only can we continue to enhance our
        knowledge of the intricacies of the human body, but we can also empower
        healthcare experts with advanced tools and skills to revolutionize the
        industry.
      </p>
      <p className="pt-2">
        My deep-seated commitment to making a positive impact on the world fuels
        my drive to explore and harness the power of technology to achieve this
        goal. Whether it involves developing new algorithms or analyzing complex
        datasets using cutting-edge machine learning techniques, I am passionate
        about leveraging technology to improve people's lives.
      </p>
      <div className="flex flex-col font-mplus">
        <span className="my-4 font-bold underline underline-offset-4">
          Research profiles
        </span>
        <Link
          href="https://www.researchgate.net/profile/Alvaro-Gaona"
          className="mr-auto flex w-auto flex-row items-center rounded-lg px-4 py-4 decoration-blue-700 hover:bg-zinc-200 hover:underline hover:underline-offset-4 dark:hover:bg-zinc-600"
        >
          <GoogleScholar className="mt-[2px] text-2xl [&>path]:fill-[#4285F4]" />
          <span className="ml-1 font-medium text-teal-500 dark:text-teal-300">
            @alvaro-gaona
          </span>
        </Link>
        <Link
          href="https://scholar.google.com/citations?user=unBAfxAAAAAJ"
          className="mr-auto flex flex-row items-center rounded-lg px-4 py-4 decoration-blue-700 hover:bg-zinc-200 hover:underline hover:underline-offset-4 dark:hover:bg-zinc-600"
        >
          <ResearchGate className="mt-[2px] text-2xl [&>path]:fill-[#00CCBB]" />
          <span className="ml-1 font-medium text-teal-500 dark:text-teal-300">
            @Alvaro-Gaona
          </span>
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

export default Publications;
