import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const About = () => {
  const profilePic = useStaticQuery(graphql`
    query {
          placeholderImage: file(relativePath: { eq: "alvgaona.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                src
              }
            }
          }
        }`);

  return (
    <section className="flex flex-row items-start mx-10 mt-10 mb-20">
      <img alt="profile-pic" src={profilePic.placeholderImage.childImageSharp.fluid.src} className="profile-pic"/>
      <div id="about" className="mr-96 ml-64 pl-10">
        <p className="text-b-gray-200 text-3xl">
          About
        </p>
        <p className="mt-2 text-justify text-thin">
        I'm a graduate research engineer at the
        {' '}
          <a href="https://linar.udesa.edu.ar/" className="my-link">Laboratory of
          Artificial Intelligence and Robotics</a>
        {' '} of University of San Andres.
        I'm working on the challenges of mobile robotics and the algorithms to address
        many problems, such as localization, mapping, perception, and navigation. 
        In particular, for Unmanned Aerial Vehicles (UAV) and Autonomous Cars.
        <br/>
        <br/>
        I'm generally interested in the intersection of the fields of robotics, aerospace, and automotive.
        </p>
      </div>
    </section>
  );
};

export default About;
