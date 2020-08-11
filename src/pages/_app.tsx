import 'react-calendar-heatmap/dist/styles.css';

import { AppProps } from 'next/app';
import React from 'react';

import Footer from '@components/Footer';
import Header from '@components/Header';

import GlobalStyles from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />

    <GlobalStyles />
    <Component {...pageProps} />

    <Footer />
  </>
);

export default App;
