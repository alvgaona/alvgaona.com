import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const FigureCard = (props) => {
  const {
    pictureUrl,
    title,
    description,
    btnText,
    to,
  } = props;

  return (
    <figure className="card-figure">
      <img alt="" src={pictureUrl} className="latest-fig"/>
      <figcaption className="latest-fig-caption">
        <h2 className="font-medium text-2xl">{title}</h2>
        {description ? <p className="text-white">{description}</p> : undefined}
        <div className="inline w-1/3 p-2">
          <Link to={to} className="card-btn">
            {btnText}
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

FigureCard.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default FigureCard;
