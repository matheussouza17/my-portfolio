import { AppProps } from 'next/app';
import '../styles/globals.scss'; // Importando os estilos globais
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
