// @flow

import * as React from 'react';
import { Link } from 'gatsby';
import PageLink from '../../../../shared/models/PageLink';
import SubHeader from '../../../../shared/components/sub-header';

const BlogHeader = (): React.Node => (
  <SubHeader title="Blog">
    <ul className="inline-flex flex-row p-0 m-0 self-center h-auto w-auto list-none">
      <li className="flex-inline-flex m-0 relative h-full items-center">
        <Link to={PageLink.BLOG_URL} activeClassName="active-noir" className="blog-nav-item pointer text-white text-sm">
          Latest
        </Link>
      </li>
      <li className="flex-inline-flex m-0 relative h-full items-center">
        <Link to={PageLink.ALL_BLOG_URL} activeClassName="active-noir" className="blog-nav-item pointer text-white text-sm">
          All Posts
        </Link>
      </li>
    </ul>
  </SubHeader>
);

export default BlogHeader;
