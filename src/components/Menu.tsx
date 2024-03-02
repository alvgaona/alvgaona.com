import github from '@/assets/github.svg';

const Menu = () => (
  <div className="flex h-12 flex-row items-center">
    <ul className="flex h-full flex-row items-center justify-evenly gap-4">
      <li className="font-dm-sans decoration-[#E76346] decoration-2 hover:underline hover:underline-offset-4">
        <a href="/">About</a>
      </li>
      <li className="font-dm-sans decoration-[#E76346] decoration-2 hover:underline hover:underline-offset-4">
        <a href="/projects">Projects</a>
      </li>
      <li className="font-dm-sans decoration-[#E76346] decoration-2 hover:underline hover:underline-offset-4">
        <a href="/publications">Publications</a>
      </li>
      <li className="font-dm-sans decoration-[#E76346] decoration-2 hover:underline hover:underline-offset-4">
        <a href="/posts">Posts</a>
      </li>
      <li className="font-dm-sans decoration-[#E76346] decoration-2 hover:underline hover:underline-offset-4">
        <div className="flex flex-row items-center justify-evenly">
          <img src={github.src} alt="github" width="18" height="18" />
          <a className="ml-1" href="https://github.com/alvgaona/alvgaona.com">
            Source
          </a>
        </div>
      </li>
    </ul>
  </div>
);

export default Menu;
