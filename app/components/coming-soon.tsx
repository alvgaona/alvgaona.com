import * as React from 'react';
import Link from 'next/link';

// .show-btn {
//   outline: none;
//   display: flex;
//   font-weight: 400;
//   font-size: 1rem;
//   line-height: 1.125rem;
//   text-decoration: none;
//   width: 10rem;
//   color: #fff;
//   text-transform: uppercase;
//   justify-content: center;
//   text-align: center;
//   align-items: center;
//   min-height: 3.5rem;
//   border: none;
//   background: #000000;
//   position: relative;

//   &:hover {
//     background: #999999;
//     transition-property: background-color;
//     transition-duration: 0.25s;
//     transition-timing-function: ease-out;
//     transition-delay: 0s;
//   }
// }


export default (): JSX.Element => (
  <>
    <div className="flex flex-col justify-center items-center my-24">
      <h1 className="font-mplus text-3xl font-bold">Page is under construction</h1>
      <p className="text-md mt-4 px-4 pb-4 border-b-1 border-solid">Sorry for the inconvenience!</p>
      <Link href="/" className="font-mplus font-normal bg-teal-500 text-white p-4 rounded-lg leading-5 outline-none hover:bg-teal-600 transition-colors duration-500">
        Take me home
      </Link>
    </div>
  </>
);