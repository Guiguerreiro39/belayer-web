import { FC, ReactNode } from 'react'
import LayoutNavbar from './navbar'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutNavbar />
      <main className='relative mt-24 p-4'>{children}</main>
    </>
  )
}

export default Layout
