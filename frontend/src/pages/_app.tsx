import { useEffect } from "react";
import type { AppProps } from "next/app";
import "@/styles/global.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/utils/apollo.client";
import nookies from "nookies";
import { useStore } from "@/utils/store";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const store = useStore();

  useEffect(() => {
    store.authInit()
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
