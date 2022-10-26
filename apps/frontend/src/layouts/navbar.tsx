import { FC, useEffect, useState } from 'react'
import { useLogoutMutation } from '@/graphql/schema'
import { useAuthStore } from '@/services/store/auth'
import { ClickableIcon } from 'component-library'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Discover from '@/assets/svg/discover.svg'
import Groups from '@/assets/svg/groups.svg'
import Search from './components/search'

const LayoutNavbar: FC = () => {
  const store = useAuthStore()
  const router = useRouter()
  const [logoutMutation, { error }] = useLogoutMutation()

  const path = router.pathname.split('/')[1]

  console.log(path)

  const logout = () => {
    logoutMutation()

    if (error) console.log(error)

    store.setUser()
    router.push('/login')
  }

  return (
    <nav className='w-full max-w-full h-24 py-2 px-4 lg:px-8 lg:py-4 2xl:px-12 absolute top-0 bg-white grid grid-cols-12 gap-6 items-center shadow'>
      <h2 className='font-bold text-xl col-span-3'>Belayer</h2>
      <div className='col-span-6 flex justify-center items-center w-full gap-12'>
        <Link href='/discover'>
          <ClickableIcon active={path === 'discover'}>
            <Discover className='h-8 w-8' />
          </ClickableIcon>
        </Link>
        <Link href='/groups'>
          <ClickableIcon active={path === 'groups'}>
            <Groups className='h-8 w-8' />
          </ClickableIcon>
        </Link>
        <Link href='/rank'>
          <ClickableIcon active={path === 'rank'}>
            <Discover className='h-8 w-8' />
          </ClickableIcon>
        </Link>
        <Link href='/about'>
          <ClickableIcon active={path === 'about'}>
            <Groups className='h-8 w-8' />
          </ClickableIcon>
        </Link>
        <Search />
      </div>
      <div className='col-span-3 space-x-6 text-right'>
        <p>profile</p>
      </div>
    </nav>
  )
}

export default LayoutNavbar
