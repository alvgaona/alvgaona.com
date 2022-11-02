import * as React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialWebsites from '../lib/SocialWebsites';

export default (): JSX.Element => (
  <footer>
    <div className="flex justify-center self-center items-center h-14 text-sm">
      <span>{`© ${new Date().getFullYear()} Alvaro Gaona. All rights reserved.`}</span>
    </div>
    <div className="flex flex-row justify-center self-center">
      <li className="inline-flex cursor-default">
        <Link aria-label="github" className="mx-4" href={SocialWebsites.GITHUB}>
          <FaGithub className="[&>path]:fill-gray-800 dark:[&>path]:fill-teal-300 [&>path]:hover:fill-black text-3xl" id="github" />
        </Link>
      </li>
      <li className="inline-flex cursor-default">
        <Link aria-label="linkedin" className="mx-4" href={SocialWebsites.LINKEDIN}>
          <FaLinkedin className="[&>path]:fill-gray-800 dark:[&>path]:fill-teal-300 [&>path]:hover:fill-[#0a66c2] text-3xl" id="linkedin" />
        </Link>
      </li>
      <li className="inline-flex cursor-default">
        <Link aria-label="twitter" className="mx-4" href={SocialWebsites.TWITTER}>
          <FaTwitter className="[&>path]:fill-gray-800 dark:[&>path]:fill-teal-300 [&>path]:hover:fill-[#0083eb] text-3xl" id="twitter" />
        </Link>
      </li>
    </div>
  </footer>
);
