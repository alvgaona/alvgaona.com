// Parse date information out of blog post filename.
const BLOG_POST_FILENAME_REGEX = /([0-9]+)-([0-9]+)-([0-9]+)-(.+)\.md$/;

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const { permalink } = node.frontmatter;
    const { relativePath } = getNode(node.parent);

    let slug = permalink;

    if (!slug) {
      if (relativePath.includes('blog')) {
        // Blog posts don't have embedded permalinks.
        // Their slugs follow a pattern: /blog/<year>/<month>/<day>/<slug>.html
        // The date portion comes from the file name: <date>-<title>.md
        const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
        const year = match[1];
        const month = match[2];
        const day = match[3];
        const filename = match[4];

        const prefix = '/blog';
        slug = `${prefix}/${year}/${month}/${day}/${filename}.html`;

        const date = new Date(year, month - 1, day);

        // Blog posts are sorted by date and display the date in their header.
        createNodeField({
          node,
          name: 'date',
          value: date.toJSON(),
        });

        createNodeField({
          node,
          name: 'prefix',
          value: prefix,
        });
      } else {
        slug = `/${relativePath.replace('.md', '.html')}`;
      }
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
