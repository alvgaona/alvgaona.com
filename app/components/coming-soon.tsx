import * as React from 'react';
import Link from 'next/link';

export default (): JSX.Element => (
  <>
    <div className="font-mplus pl-2 pr-2 mt-xl w-full h-auto">
      <div className="flex flex-col justify-center items-center mt-24">
        <h1 className="text-3xl font-bold">Page is under construction</h1>
        <p className="text-md mt-4 px-4 pb-4 border-b-1 border-solid">Sorry for the inconvenience!</p>
        <div className="show-btn mt-8">
          <Link href="/">
            Take me home
          </Link>
        </div>
      </div>
    </div>
  </>
);