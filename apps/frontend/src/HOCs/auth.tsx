import { useRouter } from 'next/router'
import { ComponentType } from 'react'
import { useIsAuthenticated } from '@/context/auth'
import Layout from '@/layouts/layout'

export function withAuth<Prop extends JSX.IntrinsicAttributes>(ProtectedComponent: ComponentType<Prop>) {
  return (props: Prop) => {
    if (typeof window === 'undefined') return null

    const Router = useRouter()
    const isAuthenticated = useIsAuthenticated()

    if (!isAuthenticated) {
      Router.replace('/login')
      return null
    }

    return (
      <Layout>
        <ProtectedComponent {...props} />
      </Layout>
    )
  }
}

export function withoutAuth<Prop extends JSX.IntrinsicAttributes>(UnprotectedComponent: ComponentType<Prop>) {
  return (props: Prop) => {
    if (typeof window === 'undefined') return null

    const Router = useRouter()
    const isAuthenticated = useIsAuthenticated()

    if (isAuthenticated) {
      Router.replace('/')
      return null
    }

    return <UnprotectedComponent {...props} />
  }
}
