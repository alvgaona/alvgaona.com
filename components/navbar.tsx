import * as React from 'react';
import Link from 'next/link';
import PageLink from '../lib/PageLink';
import Logo from '../components/logo';
import { FaGithub } from 'react-icons/fa';

type Props = {
  bottomShadow?: Boolean,
}

const NavItem = ({ children }: { children: React.ReactNode; }) => (
  <li className="font-mplus hover:underline hover:underline-offset-4">
    {children}
  </li>
)

export default ({ bottomShadow = true }: Props): JSX.Element => (
  <nav className="fixed z-index-2 backdrop-blur-md w-full">
    <div className={`h-12 ${bottomShadow ? 'shadow-md' : ''}`}>
      <ul className="flex flex-row items-center h-full justify-evenly mx-52 px-52">
        <Logo/>
        <NavItem>
          <Link href="/">About</Link>
        </NavItem>
        <NavItem>
          <Link href={PageLink.WORKS_URL}>Works</Link>
        </NavItem>
        <NavItem>
          <Link href={PageLink.PUBLICATIONS_URL}>Publications</Link>
        </NavItem>
        <NavItem>
          <Link href={PageLink.POSTS_URL}>Posts</Link>
        </NavItem>
        <NavItem>
          <div className="flex flex-row justify-evenly items-center">
            <FaGithub/>
            <Link className="ml-1" href="https://github.com/alvgaona/alvgaona.com">Source</Link>
          </div>
        </NavItem>
      </ul>
    </div >
  </nav>
);
