import React from 'react';

import Meta from './meta';

export interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Layout: React.FC<Props> = ({
  title = 'Github Clone',
  description = 'Clone da interface do Github para fins de estudo.',
  image = 'https://i.pinimg.com/originals/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.png',
  url = 'https://github-clone-zevdvlpr.vercel.app',
  children,
}) => (
  <>
    <Meta title={title} description={description} image={image} url={url} />
    {children}
  </>
);

export default Layout;
