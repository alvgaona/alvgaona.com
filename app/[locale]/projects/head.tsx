const metadata = {
  title: 'Projects',
};

const Head = async () => {
  return (
    <>
      <title>{metadata.title}</title>
      <meta property="og:title" content={metadata.title} key="og:title" />
    </>
  );
};

export default Head;
