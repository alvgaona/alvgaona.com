/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import PageLink from '../../../shared/models/PageLink';

const Projects = () => {
  const photo = useStaticQuery(graphql`
    query {
          backgroundImage: file(relativePath: { eq: "background-photo-3719622.jpg" }) {
            childImageSharp {
              original {
                src
              }
            }
          }
          decorateImage: file(relativePath: { eq: "decorate-photo-3945684.jpg" }) {
            childImageSharp {
              original {
                src
              }
            }
          }
        }`);

  return (
    <section className="section meta-projects">
      <div className="flex flex-col justify-center z-10 background-image background-image-size" style={{ backgroundImage: `url(${photo.backgroundImage.childImageSharp.original.src})` }}>
        <div className="pl-8">
          <div className="h-auto w-full">
            <span className="show-subtitle">the Projects</span>
          </div>
          <div className="my-4 py-4">
            <span className="title">Check them out</span>
          </div>
          <div className="show-btn">
            <Link to={PageLink.PROJECTS_URL}>
              Show me
            </Link>
          </div>
        </div>
      </div>
      <div className="background-image" style={{ backgroundImage: `url(${photo.decorateImage.childImageSharp.original.src})` }}/>
    </section>
  );
};

export default Projects;
