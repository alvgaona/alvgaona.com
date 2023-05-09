import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import { FaGithub as Github } from 'react-icons/fa';
import ThemeToggleButton from './theme-toggle-button';

const NavItem = ({ children }: { children: React.ReactNode; }): JSX.Element => (
  <li className="font-mplus hover:underline hover:underline-offset-4">
    {children}
  </li>
)

export const Header = (): JSX.Element => (
  <header className="fixed z-index-2 backdrop-blur-md shadow-md w-full">
    <div className="mx-auto max-w-2xl">
      <nav className="flex justify-between first:items-center text-base">
        <Logo />
        <div className="flex flex-row items-center h-12">
          <ul className="flex flex-row items-center gap-4 h-full justify-evenly">
            <NavItem>
              <Link href="/" scroll={false}>About</Link>
            </NavItem>
            <NavItem>
              <Link href="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link href="/publications" scroll={false}>Publications</Link>
            </NavItem>
            <NavItem>
              <Link href="/posts">Posts</Link>
            </NavItem>
            <NavItem>
              <div className="flex flex-row justify-evenly items-center">
                <Github />
                <Link className="ml-1" href="https://github.com/alvgaona/alvgaona.com">Source</Link>
              </div>
            </NavItem>
          </ul>
        </div >
        <div className="justify-self-end">
            <ThemeToggleButton/>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
