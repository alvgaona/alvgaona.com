import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  return (
    <footer className="pb-10">
      <div className="flex h-14 items-center justify-center self-center text-sm">
        <span>
          {`© ${new Date().getFullYear()} Alvaro Gaona.`} All rights reserved.
        </span>
      </div>
      <div className="flex flex-row justify-center self-center">
        <ul>
          <li className="inline-flex cursor-default">
            <a aria-label="github" className="mx-4" href="https://github.com/alvgaona">
              <FaGithub
                className="text-3xl [&>path]:fill-gray-800 [&>path]:hover:fill-black dark:[&>path]:fill-teal-300 dark:[&>path]:hover:fill-black"
                id="github"
              />
            </a>
          </li>
          <li className="inline-flex cursor-default">
            <a aria-label="linkedin" className="mx-4" href="https://linkedin.com/in/alvaro-gaona">
              <FaLinkedin
                className="text-3xl [&>path]:fill-gray-800 [&>path]:hover:fill-[#0a66c2] dark:[&>path]:fill-teal-300 dark:[&>path]:hover:fill-[#0a66c2]"
                id="linkedin"
              />
            </a>
          </li>
          <li className="inline-flex cursor-default">
            <a aria-label="twitter" className="mx-4" href="https://twitter.com/alvgaona">
              <FaTwitter
                className="text-3xl [&>path]:fill-gray-800 [&>path]:hover:fill-[#0083eb] dark:[&>path]:fill-teal-300 dark:[&>path]:hover:fill-[#0083eb]"
                id="twitter"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
