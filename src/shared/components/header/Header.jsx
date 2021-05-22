// @flow

import * as React from 'react';
import { Link } from 'gatsby';
import PageLink from '../../models/PageLink';

type Props = {
  bottomShadow?: Boolean,
}

const Header = (props: Props): React.Node => {
  const {
    bottomShadow,
  } = props;

  return (
    <div className={`flex flex-col relative w-full h-11 top-0 bg-white z-10000 transform ${bottomShadow ? 'shadow-md' : ''}`}>
      <div className="flex flex-row w-full h-full py-0 px-1.5 border-b-0">
        <div className="flex my-auto mr-0 ml-auto self-center w-40 h-11">
          <Link to="/" className="flex flex-row w-full h-auto m-auto self-center no-underline">
            <span className="flex w-auto h-auto m-auto text-xs font-medium uppercase text-gray-900">
              alvgaona.com
            </span>
          </Link>
        </div>
        <div className="header-nav">
          <nav>
            <ul>
              <li>
                <Link to={PageLink.PROJECTS_URL}>Projects</Link>
              </li>
              <li>
                <Link to={PageLink.PUBLICATIONS_URL}>Publications</Link>
              </li>
              <li>
                <Link to={PageLink.READINGS_URL}>Readings</Link>
              </li>
              <li>
                <Link to={PageLink.COMING_SOON_URL}>Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <li className="nav-item">
          <a href={PageLink.MAIL_TO_URL} className="text-black hover:text-gray-400">Contact</a>
        </li>
      </div>
    </div>
  );
};

Header.defaultProps = {
  bottomShadow: true,
};

export default Header;
