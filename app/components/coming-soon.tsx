import Link from 'next/link';

const ComingSoon = (): JSX.Element => (
  <>
    <div className="my-24 flex flex-col items-center justify-center">
      <h1 className="text-center font-mplus text-2xl font-bold">
        I&apos;am building something amazing! Please excuse the dust as I work on the finishing touches.
      </h1>
      <p className="text-md border-b-1 mt-4 border-solid px-4 pb-4">
        I can&apos;t wait to share it with you soon. Stay tuned!
      </p>
      <Link
        href="/"
        className="rounded-lg bg-teal-500 p-4 font-mplus font-normal leading-5 text-white outline-none transition-colors duration-500 hover:bg-teal-600"
      >
        Take me home
      </Link>
    </div>
  </>
);

export default ComingSoon;
