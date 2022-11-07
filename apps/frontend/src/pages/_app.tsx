import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import '@/assets/styles/global.scss'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/services/apollo/client'
import { AuthProvider } from '@/context/auth'
import { useAuthStore } from '@/services/store/auth'
import { useGetMeQuery } from '@/graphql/schema'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)
  const store = useAuthStore()
  const { data, loading } = useGetMeQuery({
    client: apolloClient,
  })

  useEffect(() => {
    if (data) store.setUser(data.user)
  }, [data])

  if (loading) return <p>Loading...</p>

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthProvider user={data?.user}>
          <Component {...pageProps} />
        </AuthProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
