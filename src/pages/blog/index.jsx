import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Footer from '../../shared/components/footer';
import Seo from '../../shared/components/seo';
import Header from '../../shared/components/header';
import SiteHeader from '../../shared/components/site-header';
import FigureCard from '../../shared/components/figure-card/FigureCard';
import BlogHeader from './components/blog-header';

const Blog = ({ data }) => (
  <>
    <Seo title="Contact"/>
    <main className="layout">
      <SiteHeader>
        <Header bottomShadow={false}/>
        <BlogHeader title="Blog"/>
      </SiteHeader>
      <div className="site-container pl-sm pr-sm mt-xl">
        <div className="all-bg-title"><span>Latest posts</span></div>
        <div className="latest-posts">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <FigureCard
              pictureUrl={node.frontmatter.verticalFeaturedImage.childImageSharp.fluid.src}
              title={node.frontmatter.title}
              description=""
              btnText="Visit"
              to={node.fields.slug}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  </>
);

export const pageQuery = graphql`
  query LatestBlogPostsPageQuery {
    allMarkdownRemark(
      limit: 6
      filter: {fileAbsolutePath: {regex: "/blog/"}}
      sort: {fields: [fields___date], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            author
            topic
            verticalFeaturedImage {
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
          fields {
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape(
      {
        edges: PropTypes.array.isRequired,
      },
    ).isRequired,
  }).isRequired,
};

export default Blog;
