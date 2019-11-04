import React from 'react';
import PropTypes from 'prop-types';

const SubHeader = (props) => {
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

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};

export default SubHeader;
