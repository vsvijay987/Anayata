import "../styles/globals.css";

import type { AppProps } from "next/app";
//@ts-ignore
import nprogress from "nprogress";
import Router from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
    //@ts-ignore
    Router.onRouteChangeStart = () => nprogress.start();
    //@ts-ignore
    Router.onRouteChangeComplete = () => nprogress.done();
    //@ts-ignore
    Router.onRouteChangeError = () => nprogress.done();
    return <Component {...pageProps} />;
}

export default MyApp;
