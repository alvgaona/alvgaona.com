// @flow

import * as React from 'react';
import Link from 'gatsby-link';

type Props = {
  pictureUrl: string,
  title: string,
  description: string,
  btnText: string,
  to: string,
};

const FigureCard = (props: Props): React.Node => {
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

export default FigureCard;
