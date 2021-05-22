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
          <div id="mrta" className="project-container border-b-1 border-solid">
            <p className="text-b-gray-200 font-bold text-2xl helvetica-now-bold">
              Task allocation for heterogeneous multi-robot systems
            </p>
            <p className="mt-2 text-justify">
              For multi-robot teams with heterogeneous capabilities,
              typical task allocation methods assign tasks to robots
              based on the suitability of the robots to perform certain tasks
              as well as the requirements of the task itself. However, in
              real-world deployments of robot teams, the suitability of a
              robot might be unknown prior to deployment, or might vary
              due to changing environmental conditions. The difficulty in
              this problem is coordinating the fleet of robots to perform
              the tasks under these constrains. Most of the times, the tasks—one or many—
              are allocated to a single robot based on certain criteria, but
              what would happen if we could allocate single task to a cluster
              of robots? Would the suitability of the cluster-robot increase?
              Would the efficacy and efficiency, in which the task is carried out, improve?
            </p>
          </div>
          <div id="mrta" className="project-container border-b-1 border-solid">
            <p className="text-b-gray-200 font-bold text-2xl helvetica-now-bold">
              Automatic Control Simulator
            </p>
            <p className="mt-2 text-justify">
              Before deploying robots, rockets and machinery onto the real world, engineers
              have to make sure everything is working as expected; even if the software and
              hardware are in alpha versions. Iterating without simulating would be really
              expensive, and since software is soft, we can make as many mistakes as we
              want and learn from them. There are a few simulators out there that are
              used to simulate all sorts of robots, namely NVIDIA Isaac and Flightmare
              from ETH Zurich (both based on Unity 3D). The idea is to develop an open-source
              simulator with all the components needed to simulate a wide range of
              dynamic and autonomous systems.
            </p>
          </div>
          <div className="project-container border-b-1 border-solid">
            <p className="text-b-gray-200 font-bold text-2xl helvetica-now-bold">
              Bella: An onboard UAV Flight Controller
            </p>
            <p className="mt-2 text-justify">
              Essentially, onboard UAV flight controllers are electronic boards with
              different components soldered onto them. These components vary from microcontrollers,
              to pin-outs, capable of connecting to external devices. For instance,
              quadcopters or quadrotors need four motors to navigate throught different
              environments, and with microcontrollers we could control the thrust of each one of the
              motors to perform different maneuvers. My goal is to engineer multiple boards,
              depending on the scale of the UAV, so everyone can have access to the design,
              schematics, components, and algorithms. Moreover, this will help anyone who
              might want to build their own UAVs from scratch; if they want to
              try out new algorithms to do research or to learn this will help them as well.
            </p>
          </div>
          <div className="project-container">
            <p className="text-b-gray-200 font-bold text-2xl helvetica-now-bold">
              NumCase: Mathematical problems solved numerically
            </p>
            <p className="mt-2 text-justify">
              Solving mathematical problems is a quite interesting field. Problems
              that we certainly saw in undergraduate and graduate courses. We&apos;ve always been
              warned not to invert a matrix just like that, so I was interested in knowing
              what the reason was. Then, convex optimization is a field in which all of the problems
              are solved numerically and really fast. Therefore, creating a documented repository
              with numerical implementations—such as matrix operations, matrix decompositions,
              optimization, integration and differentiation, and so on—is a great idea for people
              who really knows how to implement algorithms in various platforms without all the
              overhead many libraries have. Each implementation will be clean as possible in order
              to read the code and quickly understand it. This is not going to be a library, but who
              knows what the future might hold.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  </>
);

export default Projects;
