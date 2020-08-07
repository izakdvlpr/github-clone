import React from 'react';

import { Container, GithubLogo, SearchForm } from './styles';

const HeaderComponent: React.FC = () => (
  <Container>
    <GithubLogo />
    <SearchForm>
      <input type="text" placeholder="Enter Username or Repo..." />
    </SearchForm>
  </Container>
);

export default HeaderComponent;
