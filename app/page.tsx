
import Image from 'next/image'
import alvgaona from '../public/alvgaona.jpg'
import Link from 'next/link'
import { IoMdArrowForward } from 'react-icons/io'
import RocheLogo from '../public/roche.svg'
import AsappLogo from '../public/asapp.svg'
import TelecomLogo from '../public/telecom.svg'

export default () => {
  return (
    <>
      <section className="flex flex-col items-start">
        <div className="flex flex-row justify-center w-full">
          <span className="font-mplus font-medium bg-gray-800 dark:bg-gray-600 text-white text-base border-1 px-12 py-4 my-5 rounded-md">
            Hi! I'm a Software and Machine Learning Engineer based in
            {' '}
            <Link className="underline underline-offset-4 text-sky-300" href="https://en.wikipedia.org/wiki/Argentina">Argentina</Link>. 📍
          </span>
        </div>
        <div className="flex flex-row w-full mt-6 justify-around">
          <div className="flex flex-col">
            <span className="font-mplus font-bold text-5xl mb-1">Alvaro Gaona</span>
            <p>Engineer / Developer / Architect / Researcher </p>
          </div>
          <Image className="h-32 self-end w-auto rounded-full" alt="avatar" src={alvgaona} priority />
        </div>
      </section>
      <section className="flex flex-col items-start justify-start">
        <div className="flex flex-col w-full mt-6">
          <span className="font-mplus font-bold text-xl underline underline-offset-4 mb-4">Background</span>
          <p className="text-justify">
            Certainly most of the time I'm working as a Software Engineer at a Machine Learning company.
            My job is to design, architect and develop robust, performing, and scalable machine learning services.
            Since 2020 I've been contributing to my favorite deep learning framework, PyTorch, with features and improvements
            to make both the user's and the developers' life easier. Look at my
            {' '}
            <Link className="underline underline-offset-4 decoration-orange-300 hover:animate-pulse" href="https://github.com/pytorch/pytorch/search?q=is%3Apr+author%3Aalvgaona+author%3Aalvarogaona&type=issues">
              contributions
            </Link>.
          </p>
          <p className="mt-4">
            Even though I'm more of a backend engineer, I like frontend technologies and I try to keep up to date with them.
            In particular, I read a lot about the React ecosystem; it's quite fun.
          </p>
          <p className="mt-4">
            I'm also the creator of <span className="italic">discord.cf</span> a framework to build your own Discord bots on top of Cloudflare.
            {' '}
            <Link
              href="https://github.com/discordcf/discordcf"
              className="inline-flex flex-row items-center text-orange-500 underline underline-offset-4 hover:animate-pulse"
            >
              Learn more <IoMdArrowForward className="self-center ml-1 mt-1" />
            </Link>
          </p>
          <Link href="/works" className="justify-center transition-colors duration-500 self-center mt-8 px-8 py-2 border-1 rounded-lg font-mplus font-medium bg-teal-500 text-white hover:text-white hover:bg-teal-600">
            Check out my works
          </Link>
          <p className="mt-8">
            Oh, I got into research too. Feel free to browse my
            {' '}
            <Link className="underline underline-offset-4 decoration-orange-300 hover:animate-pulse" href="/publications">
              interests and publications
            </Link>.
          </p>
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="font-mplus font-bold text-xl underline underline-offset-4 mb-4">Free time</span>
          <p className="text-justify">Not everything is work. I love doing sports, basketball and football (soccer) are my go-to choices.
            I'm also a HUGE fan of Formula 1.
          </p>
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="font-mplus font-bold text-xl underline underline-offset-4 mb-4">Life timeline</span>
          <div className="flex flex-row"><span className="font-mplus font-medium mr-4">1991</span>Born in Buenos Aires, Argentina.</div>
          <div className="flex flex-row">
            <span className="font-mplus font-medium mr-4">2015</span>
            Started my software engineering journey at Telecom.
            <TelecomLogo className="ml-1" width="20" />
          </div>
          <div className="flex flex-row"><span className="font-mplus font-medium mr-4">2019</span>
            <span>
              Completed a Graduate Degree in Electrical Engineering at the
              {' '}
              <Link href="https://www.fi.uba.ar/" className="underline underline-offset-4 decoration-orange-300 hover:animate-pulse">
                Faculty of Engineering, Universidad de Buenos Aires.
              </Link>
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="font-mplus font-medium mr-4">2019</span>
            Joined the Roche Sequencing team as a Senior Software Engineer.
            <RocheLogo className="ml-1" height="20" />
          </div>
          <div className="flex flex-row items-center">
            <span className="font-mplus font-medium mr-4">2022</span>
            Joined ASAPP!
            <AsappLogo className="ml-1" />
          </div>
        </div>
      </section>
    </>
  );
};
