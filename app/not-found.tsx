import Link from 'next/link';
import * as React from 'react';

const NotFound = (): React.ReactNode => (
  <>
    <div className="mt-24 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Looks like the route that you just hit no longer belongs here.</h1>
      <p className="text-md border-b-1 mt-4 border-solid px-4 pb-4">
        Sorry, I couldn&apos;t find the page for you. Let&apos;s start fresh.
      </p>
      <div className="show-btn mt-8">
        <Link href="/">Take me home</Link>
      </div>
    </div>
  </>
);

export default NotFound;
