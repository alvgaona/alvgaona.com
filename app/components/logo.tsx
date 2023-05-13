import Link from 'next-intl/link';

const Logo = (): JSX.Element => (
  <span className="font-mplus">
    <Link href="/">
      <span className="rounded-full border-2 border-black p-1 text-lg dark:border-zinc-400">
        <span className="font-bold">A</span>
        <span className="font-normal">G</span>
      </span>
    </Link>
  </span>
);

export default Logo;
