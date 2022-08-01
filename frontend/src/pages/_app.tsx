import type { AppProps } from "next/app";
import "@/styles/global.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/utils/apollo.client";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
