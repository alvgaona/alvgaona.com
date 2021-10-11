// @flow

import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Link from 'gatsby-link';

const About = (): React.Node => {
  const profilePic: any = useStaticQuery(graphql`
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
      <div id="about" className="mr-96 ml-28 pl-10">
        <p className="text-b-gray-200 text-3xl">
          About
        </p>
        <p className="mt-2 text-justify">
          In 2019, I graduated from University of Buenos Aires in Electronics Engineering.
          Throughout my graduate years, I specialized in subjects such as signal processing,
          control theory, linear estimation, machine learning, and robotics.
          Ultimately, achieving my degree by completing and defending my undergraduate thesis in the field
          of signal processing and deep learning; in addition to a published
          {' '}
          <Link to="/publications#hss" className="my-link">article</Link>
          {' '}
          based on it.
          <br/>
          <br/>
          Nowadays, I&apos;m working at University of San Andres as a researcher in the
          {' '}
          <a href="https://linar.udesa.edu.ar/" className="my-link">Laboratory of
          Artificial Intelligence and Robotics</a>
          {'.'} My research pathway belongs to the field of multi-agent coordination. 
        </p>
      </div>
    </section>
  );
};

export default About;
