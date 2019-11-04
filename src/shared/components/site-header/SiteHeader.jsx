import React from 'react';
import PropTypes from 'prop-types';

const SiteHeader = (props) => {
  const { children } = props;

  return (
    <header className="site-header">
      {children}
    </header>
  );
};

SiteHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteHeader;
