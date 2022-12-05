import { FC, ReactNode } from 'react'
import LayoutNavbar from './navbar'
import LayoutSidebar from './sidebar'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutNavbar />
      <main className='relative grid grid-cols-12 gap-6 mt-24 p-4'>
        <LayoutSidebar />
        <div className='col-span-9 lg:col-span-10'>{children}</div>
      </main>
    </>
  )
}

export default Layout
