// @flow

import * as React from 'react';

type Props = {
  title: string,
  children?: Array<React.Node>
}

const SubHeader = (props: Props): React.Node => {
  const { title, children } = props;

  return (
    <div className="lite-header">
      <div className="lite-header-container bg-black-100 min-h-32">
        <div className="title-wrapper">
          <span className="white-100">{title}</span>
        </div>
        <div className="lite-header-nav">
          <nav className="inline-flex flex-set overflow-hidden relative h-auto w-auto">
            {children}
          </nav>
        </div>
      </div>
    </div>
  );
};

SubHeader.defaultProps = {
  children: undefined,
};

export default SubHeader;
