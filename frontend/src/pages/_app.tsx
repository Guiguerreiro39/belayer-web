import type { AppProps } from "next/app";
import "@/styles/global.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/services/apollo/client";
import { AuthProvider } from "@/context/auth";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
