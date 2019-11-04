// @flow

import * as React from 'react';
import Seo from '../../shared/components/seo';
import Header from '../../shared/components/header';
import SiteHeader from '../../shared/components/site-header';
import Footer from '../../shared/components/footer';
import SubHeader from '../../shared/components/sub-header';
import ReadingTopic from './components/ReadingTopic';
import Book from './components/Book';

const Readings = (): React.Node => (
  <>
    <Seo title="Readings"/>
    <main aria-label="layout" className="layout">
      <SiteHeader>
        <Header/>
        <SubHeader title="Readings"/>
      </SiteHeader>
      <div className="site-container pl-10 pr-10 mt-xl">
        <div aria-label="reading-topics" className="my-6 w-auto">
          <ReadingTopic
            topic="Computer Science"
            showBorder
          >
            <Book
              author="M. Weisfeld"
              year="2019"
              title="The Object Oriented Thought Process"
              publisher="Addison-Wesley Professional, 5th Edition"
            />
            <Book
              author="J. Bloch"
              year="2018"
              title="Effective Java"
              publisher="Addison-Wesley Professional, 3rd Edition"
            />
            <Book
              publisher="Addison-Wesley Professional, 4th Edition"
              year="2019"
              title="The C++ Programming Language"
              author="Bjarne Stroustrup"
            />
          </ReadingTopic>
          <ReadingTopic
            topic="Signal Processing"
            showBorder
          >
            <Book
              publisher="Pearson, 2nd Edition"
              title="Signal and Systems"
              author="A. V. Oppenheim, A. S. Willsky, S. H. Nawab"
              year="2000"
            />
            <Book
              publisher="Prentice Hall, 1st Edition"
              title="Linear Estimation"
              author="T. Kailath, A. H. Sayed, B. Hassibi"
              year="2000"
            />
          </ReadingTopic>
          <ReadingTopic
            topic="Control Theory"
            showBorder
          >
            <Book
              publisher="Springer-Verlag London"
              year="1995"
              title="Nonlinear Control Systems"
              author="A. Isidori"
            />
            <Book
              publisher="Springer-Verlag London"
              year="1999"
              title="Nonlinear Control Systems II"
              author="A. Isidori"
            />
            <Book
              publisher="Springer"
              year="2005"
              title="Receding Horizon Control"
              author="W. H. Kwon, S. H. Han"
            />
            <Book
              publisher="Springer"
              year="2017"
              title="Lectures in Feedback Design for Multivariable Systems"
              author="A. Isidori"
            />
            <Book
              publisher="Society for Industrial and Applied Mathematics"
              author="S. Boyd, L. El Ghaoui, E. Feron, V. Balakrishnan"
              title="Linear Matrix Inequalities in System and Control Theory"
              year="1994"
            />

          </ReadingTopic>
          <ReadingTopic
            topic="Optimization"
          >
            <Book
              author="S. Boyd, L. Vandenberghe"
              title="Convex Optimization"
              publisher="Cambridge Press University"
              year="2004"
            />
          </ReadingTopic>
        </div>
      </div>
      <Footer/>
    </main>
  </>
);

export default Readings;
