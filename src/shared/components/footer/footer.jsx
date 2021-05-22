// @flow

import * as React from 'react';
import OpenInNew from '@material-ui/icons/OpenInNew';
import { Link } from 'gatsby';
import {
  Facebook, GitHub, LinkedIn, Twitter,
} from '@material-ui/icons';
import SocialWebsites from '../../models/SocialWebsites';
import PageLink from '../../models/PageLink';

const Footer = (): React.Node => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="copyright-wrapper">
        <div className="copyright">
          <span>{`Copyright © ${year}. All rights reserved.`}</span>
        </div>
      </div>
      <ul className="styled-ul">
        <li className="styled-li">
          <div className="flex flex-col">
            <h4>About</h4>
            <Link to="/#about" className="site-link">
              <div className="link-box-item">Introduction</div>
            </Link>
            <Link to={PageLink.RESUME_URL} className="site-link">
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
                <OpenInNew/>
              </div>
            </a>
            <a href={SocialWebsites.LINKEDIN} className="site-external-link">
              <div className="link-box-item">
                LinkedIn
                <OpenInNew/>
              </div>
            </a>
            <a href={SocialWebsites.FACEBOOK} className="site-external-link">
              <div className="link-box-item">
                Facebook
                <OpenInNew/>
              </div>
            </a>
            <a href={SocialWebsites.TWITTER} className="site-external-link">
              <div className="link-box-item">
                Twitter
                <OpenInNew/>
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
            <Link to={PageLink.COMING_SOON_URL} className="site-link">
              <div className="link-box-item">Blog</div>
            </Link>
            <Link to={PageLink.PUBLICATIONS_URL} className="site-link">
              <div className="link-box-item">Publications</div>
            </Link>
          </div>
        </li>
      </ul>
      <div className="m-0 border-t border-t-grey ">
        <div className="sub-footer-align">
          <li className="tab cursor-default">
            <a aria-label="github" className="site-external-link" href={SocialWebsites.GITHUB}>
              <GitHub id="github"/>
            </a>
          </li>
          <li className="tab cursor-default">
            <a aria-label="linkedin" className="site-external-link" href={SocialWebsites.LINKEDIN}>
              <LinkedIn id="linkedin"/>
            </a>
          </li>
          <li className="tab cursor-default">
            <a aria-label="facebook" className="site-external-link" href={SocialWebsites.FACEBOOK}>
              <Facebook id="facebook"/>
            </a>
          </li>
          <li className="tab cursor-default">
            <a aria-label="twitter" className="site-external-link" href={SocialWebsites.TWITTER}>
              <Twitter id="twitter"/>
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
