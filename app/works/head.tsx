const metadata = {
    title: "Work",
}

export default async () => {  
    return (
      <>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} key="og:title"/>
      </>
    )
  }