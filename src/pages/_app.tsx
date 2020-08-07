import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '@components/Footer';
import Header from '@components/Header';
import theme from '@config/theme';

import GlobalStyles from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Header />

    <GlobalStyles />
    <Component {...pageProps} />

    <Footer />
  </ThemeProvider>
);

export default App;
