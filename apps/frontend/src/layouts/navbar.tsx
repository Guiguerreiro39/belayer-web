import { FC } from 'react'
import { useLogoutMutation } from '@/graphql/schema'
import { useAuthStore } from '@/services/store/auth'
import { useRouter } from 'next/router'
import Menu from '@/assets/svg/menu.svg'
import Profile from './components/navbar/profile'
import Search from './components/navbar/search'

const LayoutNavbar: FC = () => {
  const store = useAuthStore()
  const router = useRouter()
  const [logoutMutation, { error }] = useLogoutMutation()

  const logout = () => {
    logoutMutation()

    if (error) console.log(error)

    store.setUser()
    router.push('/login')
  }

  return (
    <nav className='w-full max-w-full h-24 py-2 px-4 lg:px-8 lg:py-4 2xl:px-12 absolute top-0 bg-white grid grid-cols-12 gap-6 items-center shadow'>
      <h2 className='font-bold text-xl col-span-3 lg:col-span-2'>Belayer</h2>
      <div className='col-span-6 lg:col-span-8 hidden md:flex justify-end'>
        <Search />
      </div>
      <div className='col-span-3 lg:col-span-2 space-x-6 text-right hidden md:block'>
        {store.user && <Profile name={store.user.firstName} id={store.user.id} />}
      </div>
      <div className='col-span-9 block md:hidden'>
        <Menu className='h-10 w-10 float-right' />
      </div>
    </nav>
  )
}

export default LayoutNavbar
