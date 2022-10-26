import type { NextPage } from 'next'
import { withAuth } from '@/HOCs/auth'
import { useAuthStore } from '@/services/store/auth'

const Home: NextPage = () => {
  const { user } = useAuthStore<any>((state) => ({
    user: state.user,
  }))

  return <></>
}

export default withAuth(Home)
