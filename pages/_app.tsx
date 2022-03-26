import "../styles/globals.css";
import type { AppProps } from "next/app";
import nprogress from "nprogress";
import Router from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.done();
  Router.onRouteChangeError = () => nprogress.done();
  return <Component {...pageProps} />;
}

export default MyApp;
