import * as React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import PageLink from '../lib/PageLink';
import SocialWebsites from '../lib/SocialWebsites';

export default (): JSX.Element => (
  <footer className="flex flex-col mt-3">
    <div className="px-8 mx-auto w-full max-w-2xl">
      <div className="flex justify-center self-center items-center h-14 text-sm border-y border-solid">
        <span>{`© ${new Date().getFullYear()} Alvaro Gaona. All rights reserved.`}</span>
      </div>
      <ul className="flex flex-row flex-wrap h-auto my-4 justify-evenly self-center">
        <li className="flex-col m-0 py-4 px-6 font-normal text-xs tracking-wide leading-6">
          <div className="flex flex-col">
            <h4 className="text-md leading-4 tracking-wide mb-3 font-bold">About</h4>
            <Link href="/#about">
              <div className="">Introduction</div>
            </Link>
            <Link href={PageLink.RESUME_URL}>
              <div className="">Résumé</div>
            </Link>
          </div>
        </li>
        <li className="flex-col m-0 py-4 px-6 font-normal text-xs tracking-wide leading-6">
          <div className="flex flex-col">
            <h4 className="text-md leading-4 tracking-wide mb-3 font-bold">Social</h4>
            <Link href={SocialWebsites.GITHUB} className="flex flex-row items-center">
              Github
              <MdOpenInNew className="ml-1" />
            </Link>
            <a href={SocialWebsites.LINKEDIN} className="flex flex-row items-center">
              LinkedIn
              <MdOpenInNew className="ml-1" />
            </a>
            <a href={SocialWebsites.FACEBOOK} className="flex flex-row items-center">
              Facebook
              <MdOpenInNew className="ml-1" />
            </a>
            <a href={SocialWebsites.TWITTER} className="flex flex-row items-center">
              Twitter
              <MdOpenInNew className="ml-1" />
            </a>
          </div>
        </li>
        <li className="flex-col m-0 py-4 px-6 font-normal text-xs tracking-wide leading-6">
          <div className="flex flex-col">
            <h4 className="text-md leading-4 tracking-wide mb-3 font-bold">More</h4>
            <Link href={PageLink.MAIL_TO_URL}>
              Contact
            </Link>
            <Link href={PageLink.COMING_SOON_URL}>
              Blog
            </Link>
            <Link href={PageLink.PUBLICATIONS_URL}>
              Publications
            </Link>
          </div>
        </li>
      </ul>
      <div className="flex flex-row justify-center self-center py-6 border-t border-t-gray-200">
        <li className="inline-flex cursor-default">
          <Link aria-label="github" className="mx-4" href={SocialWebsites.GITHUB}>
            <FaGithub className="[&>path]:fill-[#5f6368] [&>path]:hover:fill-black text-3xl" id="github" />
          </Link>
        </li>
        <li className="inline-flex cursor-default">
          <Link aria-label="linkedin" className="mx-4" href={SocialWebsites.LINKEDIN}>
            <FaLinkedin className="[&>path]:fill-[#5f6368] [&>path]:hover:fill-[#0a66c2] text-3xl" id="linkedin" />
          </Link>
        </li>
        <li className="inline-flex cursor-default">
          <Link aria-label="twitter" className="mx-4" href={SocialWebsites.TWITTER}>
            <FaTwitter className="[&>path]:fill-[#5f6368] [&>path]:hover:fill-[#0083eb] text-3xl" id="twitter" />
          </Link>
        </li>
      </div>
    </div>
  </footer>
);
