import 'react-calendar-heatmap/dist/styles.css';

import { AppProps } from 'next/app';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '@components/Footer';
import Header from '@components/Header';
import { ThemeName, themes } from '@config/themes';

import GlobalStyles from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <Header themeName={themeName} setThemeName={setThemeName} />

      <GlobalStyles />
      <Component {...pageProps} />

      <Footer />
    </ThemeProvider>
  );
};

export default App;
