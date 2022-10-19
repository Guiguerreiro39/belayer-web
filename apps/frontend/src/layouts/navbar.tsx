import { useLogoutMutation } from '@/graphql/schema'
import { useAuthStore } from '@/services/store/auth'
import { Button, IconButton, MobileNav, Typography } from '@material-tailwind/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

const LayoutNavbar: FC = () => {
  // React state
  const [openNav, setOpenNav] = useState<boolean>(false)

  const store = useAuthStore()
  const router = useRouter()
  const [logoutMutation, { error }] = useLogoutMutation()

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false))
  }, [])

  const logout = () => {
    logoutMutation()

    if (error) console.log(error)

    store.setUser()
    router.push('/login')
  }

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography as='li' variant='small' className='p-1 text-stroke font-normal'>
        <Link href='/discover'>
          <a className='flex items-center'>Discover</a>
        </Link>
      </Typography>
    </ul>
  )

  return (
    <nav className='w-full max-w-full py-2 px-4 lg:px-8 lg:py-4 2xl:px-12 absolute top-0'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-5'>
          <Link href='/'>
            <Typography as='a' variant='small' className='cursor-pointer py-1.5 font-bold text-lg text-highlight'>
              Belayer
            </Typography>
          </Link>
          <div className='h-4 w-px bg-stroke opacity-75' />
          <div className='hidden lg:block'>{navList}</div>
        </div>
        <Button variant='gradient' size='sm' className='hidden lg:inline-block' onClick={logout}>
          <span>Logout</span>
        </Button>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6 stroke-stroke'
              viewBox='0 0 24 24'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 stroke-stroke' fill='none' strokeWidth={2}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant='gradient' size='sm' fullWidth className='mb-2' onClick={logout}>
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </nav>
  )
}

export default LayoutNavbar
