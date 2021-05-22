// @flow

import * as React from 'react';
import { Link } from 'gatsby';

type Props = {
  to: string,
  title: string,
  date: string,
  author: string,
  topic: string,
}

const MetaBlogPost = (props: Props): React.Node => {
  const {
    to,
    title,
    date,
    author,
    topic,
  } = props;

  return (
    <li className="meta-bg-wrapper-prime">
      <div className="text-uppercase green-100">{topic}</div>
      <div className="min-h-16">
        <Link to={to} className="hover:brown-100">
          <h2>{title}</h2>
        </Link>
      </div>
      <div className="text-uppercase green-100">{date}</div>
      <div className="grey-300">
        by
        <span className="ml-1.25">{author}</span>
      </div>
    </li>
  );
};

export default MetaBlogPost;
