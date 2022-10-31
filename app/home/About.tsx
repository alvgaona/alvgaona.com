import * as React from 'react';
import Image from 'next/image';
import alvgaona from '../../public/alvgaona.jpg';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

export default () => {
  return (
    <>
      <section className="flex flex-col items-start">
        <div className="flex flex-row justify-center w-full">
          <span className="font-mplus font-medium text-sm bg-gray-800 text-white text-base border-1 px-12 py-4 mb-4 rounded-md">
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
          <span className="font-mplus font-bold underline underline-offset-4 mb-2">Work</span>
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
            <Link href="/works" className="justify-center transition-colors duration-500 self-center mt-8 px-8 py-2 border-1 rounded-lg font-mplus font-medium bg-teal-500 text-white hover:text-white hover:bg-teal-600">
                Check out my works
            </Link>
        </div>
        <div className="flex flex-col w-full mt-6">
          <span className="font-mplus font-bold underline underline-offset-4">Career timeline</span>
        </div>
      </section>
    </>
  );
};
