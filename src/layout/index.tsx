import React from 'react';

import Meta from './meta';

export interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Layout: React.FC<Props> = ({
  title = '',
  description = '',
  image = '',
  url = '',
  children,
}) => (
  <>
    <Meta title={title} description={description} image={image} url={url} />
    {children}
  </>
);

export default Layout;
