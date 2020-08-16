import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { ThemeName } from '@config/themes';

import { Container, GithubLogo, SearchForm } from './styles';

const themeKey = '@GithubClone:Theme';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const HeaderComponent: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');

  const router = useRouter();

  const toggleTheme = () => {
    const changedTheme = themeName === 'light' ? 'dark' : 'light';

    setThemeName(changedTheme);
    localStorage.setItem(themeKey, changedTheme);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/${search.toLowerCase().trim()}`);
  };

  useEffect(() => {
    function resolveTheme() {
      const themeStorage = localStorage.getItem(themeKey);

      if (themeStorage !== themeName) {
        setThemeName(
          // eslint-disable-next-line no-nested-ternary
          themeStorage === 'light'
            ? 'light'
            : themeStorage === 'dark'
            ? 'dark'
            : 'light',
        );
      }
    }

    resolveTheme();
    window.addEventListener('storage', resolveTheme);
  }, []);

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
