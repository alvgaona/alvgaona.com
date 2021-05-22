// @flow

import * as React from 'react';

type Props = {
  author: string,
  title: string,
  publisher: string,
  year: string,
  className?: string,
}

const Book = (props: Props): React.Node => {
  const {
    author,
    title,
    publisher,
    year,
    className,
  } = props;

  return (
    // $FlowIgnore
    <li className={`list-item my-0 mx-1 py-1 px-0 ${className}`}>
      {author}, <span className="italic font-medium text-black">&quot;{title}&quot;</span>, {publisher}. {year}
    </li>
  );
};

Book.defaultProps = {
  className: '',
};

export default Book;
