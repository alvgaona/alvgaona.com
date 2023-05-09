import * as React from 'react';
import Link from 'next/link';

const NotFound = (): React.ReactNode => (
  <>
    <div className="flex flex-col justify-center items-center mt-24">
      <h1 className="text-3xl font-bold">Looks like the route that you just hit no longer belongs here.</h1>
      <p className="text-md mt-4 px-4 pb-4 border-b-1 border-solid">Sorry, I couldn&apos;t find the page for you. Let&apos;s start fresh.</p>
      <div className="show-btn mt-8">
        <Link href="/">
          Take me home
        </Link>
      </div>
    </div>
  </>
);

export default NotFound
