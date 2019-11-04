import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const MetaBlogPost = (props) => {
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

MetaBlogPost.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
};

export default MetaBlogPost;
