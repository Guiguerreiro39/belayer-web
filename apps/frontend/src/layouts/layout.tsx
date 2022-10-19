import { FC, ReactNode } from 'react'
import LayoutNavbar from './navbar'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <span className='absolute top-0 bg-secondary w-full h-80' />
      <LayoutNavbar />
      <main className='relative my-2 mx-8 pt-4 lg:mx-16 lg:mt-12 lg:mb-4 lg:pt-8 xl:mx-20 xl:mt-16'>{children}</main>
    </>
  )
}

export default Layout
