const siteMetadata = {
    title: "Alvaro Gaona",
    description: "Personal website.",
    author: "@alvgaona",
    url: "https://alvgaona.com"
}

const Head = async (): Promise<React.ReactNode> => (
  <>
    <title>{siteMetadata.title}</title>
    <link rel="icon" type="image/svg+xml" href="favicon.svg"/>
    <meta property="og:title" content={siteMetadata.title} key="og:title"/>
    <meta property="og:description" content={siteMetadata.description}/>
    <meta property="og:url" content={siteMetadata.url}/>
    <meta property="og:type" content="website"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:title" content={siteMetadata.title}/>
    <meta property="twitter:description" content={siteMetadata.description}/>
    <meta property="twitter:creator" content={siteMetadata.author}/>
  </>
)

export default Head

