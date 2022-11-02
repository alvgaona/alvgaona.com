const metadata = {
    title: "Works",
}

export default async () => {  
    return (
      <>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} key="og:title"/>
      </>
    )
  }