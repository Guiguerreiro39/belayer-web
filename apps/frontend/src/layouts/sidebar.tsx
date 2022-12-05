import { FC } from 'react'
import Discover from '@/assets/svg/discover.svg'
import Groups from '@/assets/svg/groups.svg'
import NavLink from './components/sidebar/navLink'

const LayoutSidebar: FC = () => {
  return (
    <nav className='h-80 bg-white col-span-3 lg:col-span-2 rounded-md overflow-hidden shadow'>
      <div className='flex flex-col'>
        <NavLink title='Groups'>
          <Groups className='h-8 w-8' />
        </NavLink>
        <NavLink href='discover' title='Discover'>
          <Discover className='h-8 w-8' />
        </NavLink>
        <NavLink href='groups' title='Groups'>
          <Groups className='h-8 w-8' />
        </NavLink>
        <NavLink href='rank' title='Rank'>
          <Discover className='h-8 w-8' />
        </NavLink>
        <NavLink href='about' title='About'>
          <Groups className='h-8 w-8' />
        </NavLink>
      </div>
    </nav>
  )
}

export default LayoutSidebar
