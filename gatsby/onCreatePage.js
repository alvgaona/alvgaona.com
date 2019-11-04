module.exports = async ({ page, actions: { deletePage } }) => {
  if (page.path.includes('components')
   || page.path.includes('templates')
   || page.path.includes('home')
   || page.path.includes('contact')
   || page.path.includes('blog')) {
    await deletePage(page);
  }
};
