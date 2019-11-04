// @flow

import { useState } from 'react';
import * as React from 'react';
import StringBuilder from '../../models/StringBuilder';

type Props = {
  label: string,
}

const TextArea = (props: Props): React.Node => {
  const {
    label,
  } = props;

  const [hasFocus, setFocus] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const turnOnFocus = () => setFocus(true);
  const turnOffFocus = () => setFocus(false);

  const setValue = (e) => {
    const targetValue = e.target.value;

    if (targetValue === '') {
      setHasValue(false);
    }

    if (targetValue !== '' && hasValue === false) {
      setHasValue(true);
    }
  };

  const labelClasses: string = new StringBuilder.Builder()
    .append('form-control-placeholder')
    .append(hasFocus ? 'has-focus' : null)
    .append(hasValue ? 'has-value' : null)
    .build();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={turnOnFocus}
      onKeyDown={turnOnFocus}
      onBlur={turnOffFocus}
      className="form-group"
    >
      <textarea
        defaultValue=""
        onChange={setValue}
        className="text-b-gray-100 overflow-y-auto resize-none w-96 h-52 p-4 rounded-md border-1 border-solid border-gray-300 focus:border-black outline-none"
      />
      <label className={labelClasses}>{label}</label>
    </div>
  );
};

export default TextArea;
