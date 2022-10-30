import * as React from 'react';

type Props = {
  title: string,
  children?: Array<React.ReactNode>
}

export default ({ title, children }: Props): JSX.Element => (
  <div className="lite-header">
    <div className="lite-header-container bg-black min-h-32">
      <div className="title-wrapper">
        <span className="text-white">{title}</span>
      </div>
      <div className="lite-header-nav">
        <nav className="inline-flex flex-set overflow-hidden relative h-auto w-auto">
          {children}
        </nav>
      </div>
    </div>
  </div>
);
