// @flow

import * as React from 'react';

type Props = {
  showBorder?: Boolean,
  children: Array<[React.Node, string]>,
  topic: string,
}

const ReadingTopic = (props: Props): React.Node => {
  const {
    showBorder,
    children,
    topic,
  } = props;

  const border: string = showBorder ? 'border-gray-400 border-b-1' : '';

  return (
    <div aria-label="topic" className={`flex flex-col items-center justify-center max-w-8xl xl:max-w-7xl w-auto mb-5 pb-4 ${border}`}>
      <div className="flex flex-col self-start uppercase w-auto pb-md">
        <h1 className="inline-block text-xl font-bold mb-1">{topic}</h1>
      </div>
      <ul className="flex flex-col w-full m-0 list-disc list-inside">
        {children}
      </ul>
    </div>
  );
};

ReadingTopic.defaultProps = {
  showBorder: false,
};

export default ReadingTopic;
