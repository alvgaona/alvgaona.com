// @flow

import * as React from 'react';
import Link from 'gatsby-link';
import Seo from '../../shared/components/seo';
import Header from '../../shared/components/header';
import Footer from '../../shared/components/footer';
import SiteHeader from '../../shared/components/site-header';
import SubHeader from '../../shared/components/sub-header';

const NotFoundPage = (): React.Node => (
  <>
    <Seo title="404"/>
    <main className="layout">
      <SiteHeader>
        <Header/>
        <SubHeader/>
      </SiteHeader>
      <div className="pl-2 pr-2 mt-xl w-full h-auto">
        <div className="flex flex-col justify-center items-center mt-24">
          <h1 className="text-3xl font-bold">Looks like the route that you just hit no longer belongs here.</h1>
          <p className="text-md mt-4 px-4 pb-4 border-b-1 border-solid">Sorry, I couldn&apos;t find the page for you. Let&apos;s start fresh.</p>
          <div className="show-btn mt-8">
            <Link to="/">
              Take me home
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  </>
);

export default NotFoundPage;
