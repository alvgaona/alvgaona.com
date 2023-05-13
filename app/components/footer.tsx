'use client';

import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  const t = useTranslations('footer');

  return (
    <footer className="pb-10">
      <div className="flex h-14 items-center justify-center self-center text-sm">
        <span>
          {`© ${new Date().getFullYear()} Alvaro Gaona.`} {t('allRightsReserved')}.
        </span>
      </div>
      <div className="flex flex-row justify-center self-center">
        <li className="inline-flex cursor-default">
          <Link aria-label="github" className="mx-4" href="https://github.com/alvgaona">
            <FaGithub
              className="text-3xl [&>path]:fill-gray-800 [&>path]:hover:fill-black dark:[&>path]:fill-teal-300 dark:[&>path]:hover:fill-black"
              id="github"
            />
          </Link>
        </li>
        <li className="inline-flex cursor-default">
          <Link aria-label="linkedin" className="mx-4" href="https://linkedin.com/in/alvaro-gaona">
            <FaLinkedin
              className="text-3xl [&>path]:fill-gray-800 [&>path]:hover:fill-[#0a66c2] dark:[&>path]:fill-teal-300 dark:[&>path]:hover:fill-[#0a66c2]"
              id="linkedin"
            />
          </Link>
        </li>
        <li className="inline-flex cursor-default">
          <Link aria-label="twitter" className="mx-4" href="https://twitter.com/alvgaona">
            <FaTwitter
              className="text-3xl [&>path]:fill-gray-800 [&>path]:hover:fill-[#0083eb] dark:[&>path]:fill-teal-300 dark:[&>path]:hover:fill-[#0083eb]"
              id="twitter"
            />
          </Link>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
