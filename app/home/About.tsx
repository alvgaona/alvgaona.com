import * as React from 'react';
import Image from 'next/image';
import alvgaona from '../../public/alvgaona.jpg';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

export default () => {
  return (
    <>
      <section className="flex flex-col items-start mx-10 mt-20">
        <div className="flex flex-row justify-center w-full px-28">
          <span className="font-mplus font-medium bg-gray-800 text-white text-base border-1 px-12 py-4 mb-4 rounded-md">
            Hi! I'm a Software and Machine Learning Engineer based in
            {' '}
            <Link className="underline underline-offset-4 text-sky-300" href="https://en.wikipedia.org/wiki/Argentina">Argentina</Link>. 📍
          </span>
        </div>
        <div className="flex flex-row w-full px-36 mt-6 justify-between">
          <div className="flex flex-col">
            <span className="font-mplus font-bold text-5xl mb-1">Alvaro Gaona</span>
            <p>Engineer / Developer / Architect / Researcher </p>
          </div>
          <Image className="h-32 self-end w-auto rounded-full" alt="avatar" src={alvgaona} priority />
        </div>
      </section>
      <section className="flex flex-col items-start mx-10 my-20">
        <div className="flex flex-col w-full px-36 mt-6">
          <span className="font-mplus font-bold underline underline-offset-4 mb-2">Work</span>
          <p className="text-justify">
            Certainly most of the time I'm working as a Software Engineer at a Machine Learning company.
            My job is to design, architect and develop robust, performing, and scalable machine learning services.
            Since 2020 I contribute to my favorite deep learning framework, PyTorch, with features and improvements
            to make both the user's and the developers' life easier. Look at my 
            {' '}
            <Link className="underline underline-offset-4 decoration-orange-300 hover:animate-pulse" href="https://github.com/pytorch/pytorch/search?q=is%3Apr+author%3Aalvgaona+author%3Aalvarogaona&type=issues">
              contributions
            </Link>.
          </p>
          <br/>
          <p>
            I'm also the creator of <span className="italic">discord.cf</span> a framework to build your own Discord bots on top of Cloudflare.
            {' '}
            <Link 
              href="https://github.com/discordcf/discordcf" 
              className="inline-flex flex-row items-center text-orange-500 underline underline-offset-4 hover:animate-pulse"
            >
              Learn more <IoMdArrowForward className="self-center ml-1 mt-1"/>
            </Link>
          </p>
          <div className="font-mplus font-medium border-1 justify-center self-center mt-8 px-8 py-2 rounded-lg bg-teal-300">
            <Link href="/works">Check out my works</Link>
          </div>
        </div>
        <div className="flex flex-col w-full px-36 mt-6">
          <span className="font-mplus font-bold underline underline-offset-4">Career timeline</span>
        </div>
      </section>
    </>
  );
};
