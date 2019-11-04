const { resolve } = require('path');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = resolve(__dirname, '../src/pages/blog/templates/blog-post/BlogPost.jsx');

  const allMarkdown = await graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
  `);

  if (allMarkdown.errors) {
    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach((edge) => {
    const { slug } = edge.node.fields;

    if (slug.includes('blog/')) {
      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug,
        },
      });
    }
  });
};
