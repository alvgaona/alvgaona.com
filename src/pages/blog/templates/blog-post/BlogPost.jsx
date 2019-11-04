import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Seo from '../../../../shared/components/seo';
import BlogHeader from '../../components/blog-header';
import Header from '../../../../shared/components/header';
import Footer from '../../../../shared/components/footer';
import SiteHeader from '../../../../shared/components/site-header';

const BlogPost = ({ data }) => (
  <>
    <Seo title="Blog"/>
    <main className="layout">
      <SiteHeader>
        <Header/>
        <BlogHeader title="Blog"/>
      </SiteHeader>
      <div className="flex flex-col pl-2 pr-2 mt-xl w-full h-auto">
        <article className="mx-80">
          <section className="blog-post-header">
            <div className="flex flex-col justify-center items-start">
              <p>{data.paragraph.frontmatter.topic}</p>
              <h1>{data.paragraph.frontmatter.title}</h1>
            </div>
          </section>
          {/* <div className="pt-12 max-w-1280 m-0-auto">
              <Img fluid={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid}/>
            </div> */}
          <div className="blog-paragraph">
            <div>
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={{ __html: data.paragraph.html }}/>
            </div>
          </div>
        </article>
      </div>
      <Footer/>
    </main>
  </>
);

export const pageQuery = graphql`
  query TemplateBlogMarkdown($slug: String) {
    paragraph: markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        topic
        title
        featuredImage {
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
    }
  }  
`;

BlogPost.propTypes = {
  data: PropTypes.shape({
    paragraph: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        topic: PropTypes.string.isRequired,
        featuredImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({
              src: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPost;
