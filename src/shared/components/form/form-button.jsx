// @flow

import * as React from 'react';

type Props = {
  className?: string,
  children?: [React.Node, string],
  name?: string,
  value?: string
}

const FormButton = (props: Props): React.Node => {
  const {
    name,
    value,
    className,
    children,
  } = props;

  return (
    <button aria-label="submit" type="submit" value={value} name={name} className={className}>
      {children}
    </button>
  );
};

FormButton.defaultProps = {
  className: '',
  children: undefined,
  name: 'button',
  value: 'Submit',
};

export default FormButton;
