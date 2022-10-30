import * as React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import PageLink from '../lib/PageLink';
import SocialWebsites from '../lib/SocialWebsites';

export default (): JSX.Element => {
  const year = new Date().getFullYear();
// div .copyright {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: center;
//   width: auto;
//   padding: 10px;
//   font-size: 12px;
//   font-weight: 300;
//   color: #6d6d6d;
// }
  return (
    <footer className="site-footer font-mplus">
      <div className="flex justify-center border-b-1 border-solid w-auto m-0 h-14">
          <span className="self-center">{`© ${year} Alvaro Gaona. All rights reserved.`}</span>
      </div>
      <ul className="styled-ul">
        <li className="styled-li">
          <div className="flex flex-col">
            <h4>About</h4>
            <Link href="/#about" className="site-link">
              <div className="link-box-item">Introduction</div>
            </Link>
            <Link href={PageLink.RESUME_URL} className="site-link">
              <div className="link-box-item">Résumé</div>
            </Link>
          </div>
        </li>
        <li className="styled-li">
          <div className="flex flex-col">
            <h4>Social</h4>
            <a href={SocialWebsites.GITHUB} className="site-external-link">
              <div className="link-box-item">
                Github
                <MdOpenInNew/>
              </div>
            </a>
            <a href={SocialWebsites.LINKEDIN} className="site-external-link">
              <div className="link-box-item">
                LinkedIn
                <MdOpenInNew/>
              </div>
            </a>
            <a href={SocialWebsites.FACEBOOK} className="site-external-link">
              <div className="link-box-item">
                Facebook
                <MdOpenInNew/>
              </div>
            </a>
            <a href={SocialWebsites.TWITTER} className="site-external-link">
              <div className="link-box-item">
                Twitter
                <MdOpenInNew/>
              </div>
            </a>
          </div>
        </li>
        <li className="styled-li">
          <div className="flex flex-col">
            <h4>More</h4>
            <a href={PageLink.MAIL_TO_URL} className="site-link">
              <div className="link-box-item">Contact</div>
            </a>
            <Link href={PageLink.COMING_SOON_URL} className="site-link">
              <div className="link-box-item">Blog</div>
            </Link>
            <Link href={PageLink.PUBLICATIONS_URL} className="site-link">
              <div className="link-box-item">Publications</div>
            </Link>
          </div>
        </li>
      </ul>
      <div className="m-0 border-t border-t-grey ">
        <div className="sub-footer-align">
          <li className="tab cursor-default">
            <a aria-label="github" className="site-external-link icon-fill" href={SocialWebsites.GITHUB}>
              <FaGithub id="github"/>
            </a>
          </li>
          <li className="tab cursor-default">
            <a aria-label="linkedin" className="site-external-link icon-fill" href={SocialWebsites.LINKEDIN}>
              <FaLinkedin id="linkedin"/>
            </a>
          </li>
          <li className="tab cursor-default">
            <a aria-label="twitter" className="site-external-link icon-fill" href={SocialWebsites.TWITTER}>
              <FaTwitter id="twitter"/>
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
};
