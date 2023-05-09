import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = (): JSX.Element => (
  <footer className="pb-10">
    <div className="flex justify-center self-center items-center h-14 text-sm">
      <span>{`© ${new Date().getFullYear()} Alvaro Gaona. All rights reserved.`}</span>
    </div>
    <div className="flex flex-row justify-center self-center">
      <li className="inline-flex cursor-default">
        <Link aria-label="github" className="mx-4" href="https://github.com/alvgaona">
  <FaGithub className="[&>path]:fill-gray-800 dark:[&>path]:fill-teal-300 dark:[&>path]:hover:fill-black [&>path]:hover:fill-black text-3xl" id="github" />
        </Link>
      </li>
      <li className="inline-flex cursor-default">
        <Link aria-label="linkedin" className="mx-4" href="https://linkedin.com/in/alvaro-gaona">
  <FaLinkedin className="[&>path]:fill-gray-800 dark:[&>path]:fill-teal-300 dark:[&>path]:hover:fill-[#0a66c2] [&>path]:hover:fill-[#0a66c2] text-3xl" id="linkedin" />
        </Link>
      </li>
      <li className="inline-flex cursor-default">
        <Link aria-label="twitter" className="mx-4" href="https://twitter.com/alvgaona">
  <FaTwitter className="[&>path]:fill-gray-800 dark:[&>path]:fill-teal-300 dark:[&>path]:hover:fill-[#0083eb] [&>path]:hover:fill-[#0083eb] text-3xl" id="twitter" />
        </Link>
      </li>
    </div>
  </footer>
);

export default Footer
