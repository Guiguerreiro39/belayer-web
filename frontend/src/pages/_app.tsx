import type { AppProps } from "next/app";
import "@/assets/styles/global.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/services/apollo/client";
import { AuthProvider } from "@/context/auth";
import { useLayoutEffect, useState } from "react";
import { useAuthStore } from "@/services/store/auth";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const store = useAuthStore((state) => ({
    user: state.user,
    authInit: state.authInit,
  }));

  // Check if the initial fetch was made
  const [mount, setMount] = useState<boolean>(false)

  useLayoutEffect(() => {
    async function init() {
      await store.authInit();
      setMount(true)
    }

    init();
  }, []);

  if (!mount) return <p>Loading...</p>

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
