import { FC } from 'react'
import { useLogoutMutation, UserResponse } from '@/graphql/schema'
import { useAuthStore } from '@/services/store/auth'
import { useRouter } from 'next/router'
import Discover from '@/assets/svg/discover.svg'
import Groups from '@/assets/svg/groups.svg'
import Search from './components/navbar/search'
import NavLink from './components/navbar/navLink'
import Menu from '@/assets/svg/menu.svg'
import Profile from './components/navbar/profile'

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
      <div className='col-span-6 lg:col-span-8 justify-center items-center w-full gap-12 hidden md:flex'>
        <NavLink href='/discover'>
          <Discover className='h-8 w-8' />
        </NavLink>
        <NavLink href='/groups'>
          <Groups className='h-8 w-8' />
        </NavLink>
        <NavLink href='/rank'>
          <Discover className='h-8 w-8' />
        </NavLink>
        <NavLink href='/about'>
          <Groups className='h-8 w-8' />
        </NavLink>
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
