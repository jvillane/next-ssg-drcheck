import React, { useEffect } from "react";
import { AppProps } from 'next/app'
import '../styles/globals.css';
import { GTMPageView } from "../services/gtm";
import { Router } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>Dr Check</title>
      </Head>
      <Component {...pageProps}/>
    </>
  );
}
