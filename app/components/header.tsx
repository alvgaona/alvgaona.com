import Link from 'next/link';
import React from 'react';
import { FaGithub as Github } from 'react-icons/fa';
import Logo from './logo';
import ThemeToggleButton from './theme-toggle-button';

const NavItem = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <li className="font-mplus hover:underline hover:underline-offset-4">{children}</li>
);

export const Header = (): JSX.Element => (
  <header className="fixed z-10 w-full shadow-md backdrop-blur-md">
    <div className="mx-auto max-w-2xl">
      <nav className="flex justify-between text-base first:items-center">
        <Logo />
        <div className="flex h-12 flex-row items-center">
          <ul className="flex h-full flex-row items-center justify-evenly gap-4">
            <NavItem>
              <Link href="/" scroll={false}>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link href="/publications" scroll={false}>
                Publications
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/posts">Posts</Link>
            </NavItem>
            <NavItem>
              <div className="flex flex-row items-center justify-evenly">
                <Github />
                <Link className="ml-1" href="https://github.com/alvgaona/alvgaona.com">
                  Source
                </Link>
              </div>
            </NavItem>
          </ul>
        </div>
        <div className="justify-self-end">
          <ThemeToggleButton />
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
