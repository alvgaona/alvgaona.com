// @flow

import * as React from 'react';

type Props = {
  children: React.Node
}

const SiteHeader = (props: Props): React.Node => {
  const { children } = props;

  return (
    <header className="site-header">
      {children}
    </header>
  );
};

export default SiteHeader;
