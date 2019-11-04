/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Seo from '../../shared/components/seo';
import Header from '../../shared/components/header';
import SiteHeader from '../../shared/components/site-header';
import Footer from '../../shared/components/footer';
import About from './components/About';
import Projects from './components/Projects';

const Home = () => (
  <>
    <Seo title="Home"/>
    <main className="layout">
      <SiteHeader>
        <Header/>
      </SiteHeader>
      <div className="flex flex-col pl-2 pr-2 mt-xl w-full h-auto">
        <About/>
        <Projects/>
      </div>
      <Footer/>
    </main>
  </>
);

export default Home;
