import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function  App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default App;
