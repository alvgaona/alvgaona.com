const metadata = {
  title: 'Publications',
};

export default async () => {
  return (
    <>
      <title>{metadata.title}</title>
      <meta property="og:title" content={metadata.title} key="og:title" />
    </>
  );
};
