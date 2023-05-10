import Link from 'next/link';

export default (): JSX.Element => (
  <>
    <div className="my-24 flex flex-col items-center justify-center">
      <h1 className="font-mplus text-3xl font-bold">Page is under construction</h1>
      <p className="text-md border-b-1 mt-4 border-solid px-4 pb-4">Sorry for the inconvenience!</p>
      <Link
        href="/"
        className="rounded-lg bg-teal-500 p-4 font-mplus font-normal leading-5 text-white outline-none transition-colors duration-500 hover:bg-teal-600"
      >
        Take me home
      </Link>
    </div>
  </>
);
