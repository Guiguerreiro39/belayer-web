import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

interface NavLinkProps {
  href?: string
  title: string
  children: ReactNode
}

const NavLink: FC<NavLinkProps> = ({ href = '', title, children }) => {
  const router = useRouter()
  const path = router.pathname.split('/')[1]

  const isActive = path === href

  return (
    <Link href={`/${href}`} className={`w-full ${isActive ? 'bg-secondary/50' : ''}`}>
      <div className='relative'>
        {isActive && <div className='absolute left-0 h-full w-1.5 bg-highlight' />}
        <div className={`flex items-center gap-4 px-8 py-4`}>
          <div className={isActive ? 'fill-highlight' : ''}>{children}</div>
          <h4 className={`font-semibold text-right ${isActive ? 'text-highlight' : ''}`}>{title}</h4>
        </div>
      </div>
    </Link>
  )
}

export default NavLink
