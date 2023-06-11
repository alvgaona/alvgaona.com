import github from '@assets/github.svg';
import Logo from './Logo';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  return (
    <header className="fixed z-10 w-full shadow-md backdrop-blur-md">
      <div className="mx-auto max-w-2xl">
        <nav className="flex justify-between text-base first:items-center">
          <Logo />
          <div className="flex h-12 flex-row items-center">
            <ul className="flex h-full flex-row items-center justify-evenly gap-4">
              <li className="font-mplus hover:underline hover:underline-offset-4">
                <a href="/">
                  About
                </a>
              </li>
              <li className="font-mplus hover:underline hover:underline-offset-4">
                <a href="/projects">Projects</a>
              </li>
              <li className="font-mplus hover:underline hover:underline-offset-4">
                <a href="/publications">
                  Publications
                </a>
              </li>
              <li className="font-mplus hover:underline hover:underline-offset-4">
                <a href="/posts">Posts</a>
              </li>
              <li className="font-mplus hover:underline hover:underline-offset-4">
                <div className="flex flex-row items-center justify-evenly">
                  <img src={github.src} alt="github" width="18" height="18" />
                  <a className="ml-1" href="https://github.com/alvgaona/alvgaona.com">
                    Source
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 justify-self-end">
            <ThemeToggleButton />
          </div>
        </nav>
      </div>
    </header>
  )
};

export default Header;
