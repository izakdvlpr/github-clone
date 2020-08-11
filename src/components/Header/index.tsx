import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Container, GithubLogo, SearchForm } from './styles';

const HeaderComponent: React.FC = () => {
  const [search, setSearch] = useState('');

  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(`/${search.toLowerCase().trim()}`);
  }

  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default HeaderComponent;
