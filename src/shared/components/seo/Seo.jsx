// @flow

import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  title: string,
  description?: string,
  lang?: string,
  meta?: Array<any>,
};

const Seo = (props: Props): React.Node => {
  const {
    description,
    lang,
    meta,
    title,
  } = props;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        {
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          rel: 'stylesheet',
        },
        {
          href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap',
          rel: 'stylesheet',
        },
      ]}
    />
  );
};

Seo.defaultProps = {
  lang: 'en',
  meta: ([]: Array<empty>),
  description: '',
};

export default Seo;
