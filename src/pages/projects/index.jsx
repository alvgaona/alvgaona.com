// @flow

import * as React from 'react';
import Seo from '../../shared/components/seo';
import Header from '../../shared/components/header';
import SiteHeader from '../../shared/components/site-header';
import Footer from '../../shared/components/footer';
import SubHeader from '../../shared/components/sub-header';

const Projects = (): React.Node => (
  <>
    <Seo title="Projects"/>
    <main className="layout">
      <SiteHeader>
        <Header/>
        <SubHeader title="Projects"/>
      </SiteHeader>
      <div className="flex pl-2 pr-2 mt-xl w-full h-auto">
        <div className="projects">
          <div id="autonomous-landing" className="project-container border-b-1 border-solid">
            <p className="text-b-gray-200 font-bold text-2xl helvetica-now-bold">
              UAV Autonomous Landing
            </p>
            <p className="mt-2 text-justify">
            Unmanned Aerial Vehicles (UAV) have reached quite a mature state in the past years. 
            Many UAV implementations have been transformed into commercial products showing the success of different technologies applied to them. 
            It has been made possible for UAVs to autonomously navigate in manned airspace by reducing the risks of aerial hazards. 
            Nonetheless, there are many challenges to address for autonomous navigation.
            One of these challenges is autonomous landing; at a given point in time, the system might need to land at a known or unknown 
            location, due to one of many reasons. These reasons could be faulty actuators, or completing a task within a predefined mission.
            Landing maneuvers are quite risky, therefore the maneuvers should be attempted with high accuracy, preventing the UAV to suffer
            or cause any sort of damage to assets or people.
            </p>
          </div>
          <div id="numcase" className="project-container">
            <p className="text-b-gray-200 font-bold text-2xl helvetica-now-bold">
              NUMCASE: A collection of mathematical problems solved numerically
            </p>
            <p className="mt-2 text-justify">
              Solving mathematical problems is a quite interesting field. Problems
              that we certainly saw in undergraduate and graduate courses. We&apos;ve always been
              warned not to invert a matrix just like that, so I was interested in knowing
              what the reason was. Then, convex optimization is a field in which all of the problems
              are solved numerically and really fast. Therefore, creating a documented repository
              with numerical implementations—such as matrix operations, matrix decompositions,
              optimization, integration and differentiation, and so on—is a great idea for people
              who really wants to know how to implement algorithms in various platforms without all
              the overhead many libraries have. Each implementation will be clean as possible in
              order to read the code and quickly understand it. This is not going to be a library,
              but who knows what the future might hold.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  </>
);

export default Projects;
