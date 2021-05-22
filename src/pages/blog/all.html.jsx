// @flow

import * as React from 'react';
import { graphql } from 'gatsby';
import Footer from '../../shared/components/footer';
import Seo from '../../shared/components/seo';
import Header from '../../shared/components/header';
import SiteHeader from '../../shared/components/site-header';
import MetaBlogPost from './components/meta-blog-post';
import BlogHeader from './components/blog-header';

type Data = {
  data: {
    allMarkdownRemark: {
      edges: Array<any>
    }
  }
}

const AllBlogPosts = ({ data }: Data): React.Node => (
  <>
    <Seo title="Contact"/>
    <main className="layout">
      <SiteHeader>
        <Header bottomShadow={false}/>
        <BlogHeader/>
      </SiteHeader>
      <div className="site-container pl-10 pr-10 mt-xl">
        <div className="all-bg-title"><span>All posts</span></div>
        <div className="meta-bg-wrapper">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <MetaBlogPost
              to={node.fields.slug}
              title={node.frontmatter.title}
              date={node.fields.date}
              author={node.frontmatter.author[0]}
              topic={node.frontmatter.topic}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  </>
);

export const pageQuery: any = graphql`
  query AllBlogPostsPageQuery {
    allMarkdownRemark(
      limit: 1000
      filter: {fileAbsolutePath: {regex: "/blog/"}}
      sort: {fields: [fields___date], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            author
            topic
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

export default AllBlogPosts;
