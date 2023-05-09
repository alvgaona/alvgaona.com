import Image from "next/image";
import alvgaona from "../public/alvgaona.jpg";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

const Home = (): React.ReactNode => {
  return (
    <>
      <section className="flex flex-col gap-6 items-start">
        <div className="flex flex-row items-center w-full mt-6 justify-around">
          <div className="flex flex-col">
            <span className="font-mplus font-bold text-5xl mb-1">
              Alvaro Gaona
            </span>
            <p>Electrical Engineer / Developer / Researcher</p>
          </div>
          <Image
            className="h-32 self-end w-auto rounded-full"
            alt="avatar"
            src={alvgaona}
            priority
          />
        </div>
        <div className="flex flex-row justify-center w-full">
          <span className="font-mplus font-medium bg-gray-800 dark:bg-gray-600 text-white text-base border-1 px-12 py-4 my-5 rounded-md">
            Hi! I&apos;m a Software Developer based in{" "}
            <Link
              className="underline underline-offset-4 text-sky-300"
              href="https://en.wikipedia.org/wiki/Argentina"
            >
              Argentina
            </Link>
            . 📍
          </span>
        </div>
      </section>
      <section className="flex flex-col items-start justify-start">
        <div className="flex flex-col gap-6 w-full mt-6">
          <span className="font-mplus font-bold text-xl underline underline-offset-4">
            Background
          </span>
          <p className="text-justify">
            I&apos;m a passionate software engineer working for a cutting-edge
            machine learning company. My primary focus is on designing and
            developing high-performing and scalable machine learning services
            that are reliable and robust. In fact, I&apos;ve been contributing
            to PyTorch, my favourite deep learning framework, since 2020,
            constantly improving it to make life easier for both users and
            developers alike.{" "}
            <Link
              className="underline underline-offset-4 decoration-orange-300 hover:animate-pulse"
              href="https://github.com/pytorch/pytorch/search?q=is%3Apr+author%3Aalvgaona+author%3Aalvarogaona&type=issues"
            >
              Check them out!
            </Link>
          </p>
          <p className="text-justify">
            Although I specialize in backend engineering, I also love exploring
            new front-end technologies and staying up to date with the latest
            trends. Recently, I&apos;ve been reading up on the exciting React
            ecosystem, which I find quite fun and challenging.
          </p>
          <p className="text-justify">
            I&apos;m also a proud creator of discord.cf, an innovative framework
            that enables anyone to build their own Discord bots on top of
            Cloudflare. Discover more about this game-changing tool!
            <br />
            <Link
              href="https://github.com/discordcf/discordcf"
              className="inline-flex flex-row items-center text-orange-500 underline underline-offset-4 hover:animate-pulse mt-2"
            >
              Learn more <IoMdArrowForward className="self-center ml-1 mt-1" />
            </Link>
          </p>
          <Link
            href="/projects"
            className="justify-center transition-colors duration-500 self-center px-8 py-2 border-1 rounded-lg font-mplus font-medium bg-teal-500 text-white hover:text-white hover:bg-teal-600"
          >
            View Projects
          </Link>
          <p className="text-justify">
            Aside from my software engineering skills, I&apos;m also involved in
            exciting research projects. I have numerous interests and a few
            publications that you can explore at your leisure.
            <br />
            <Link
              href="/publications"
              className="inline-flex flex-row items-center text-orange-500 underline underline-offset-4 hover:animate-pulse mt-2"
            >
              Learn more <IoMdArrowForward className="self-center ml-1 mt-1" />
            </Link>
          </p>
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="font-mplus font-bold text-xl underline underline-offset-4 mb-4">
            Free time
          </span>
          <p className="text-justify">
            When I&apos;m not busy coding or researching, I love to unwind with
            sports. Basketball and football are my go-to choices, but I&apos;m
            also a huge Formula 1 fan. In fact, I enjoy keeping up with all the
            latest news and races!
          </p>
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="font-mplus font-bold text-xl underline underline-offset-4 mb-4">
            Life timeline
          </span>
          <div className="flex flex-row">
            <span className="font-mplus font-medium mr-4">1991</span>Born in
            Buenos Aires, Argentina.
          </div>
          <div className="flex flex-row">
            <span className="font-mplus font-medium mr-4">2015</span>
            Started my software engineering journey at Telecom.
          </div>
          <div className="flex flex-row">
            <span className="font-mplus font-medium mr-4">2019</span>
            <span>
              Completed a Graduate Degree in Electrical Engineering at the{" "}
              <Link
                href="https://www.fi.uba.ar/"
                className="underline underline-offset-4 decoration-orange-300 hover:animate-pulse"
              >
                Faculty of Engineering, Universidad de Buenos Aires.
              </Link>
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="font-mplus font-medium mr-4">2019</span>
            Joined the Roche Sequencing team as a Senior Software Engineer.
          </div>
          <div className="flex flex-row items-center">
            <span className="font-mplus font-medium mr-4">2022</span>
            Moved onto ASAPP as a Lead Software Engineer.
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
