import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { ThemeName } from '@config/themes';

import { Container, GithubLogo, SearchForm } from './styles';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const HeaderComponent: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/${search.toLowerCase().trim()}`);
  };

  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  };

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
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
