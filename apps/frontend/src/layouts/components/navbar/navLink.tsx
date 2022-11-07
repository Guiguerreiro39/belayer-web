import { IconButton } from 'component-library'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

interface NavLinkProps {
  href: string
  children: ReactNode
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter()
  const path = router.pathname.split('/')[1]

  return (
    <Link href={href}>
      <IconButton active={`/${path}` === href}>{children}</IconButton>
    </Link>
  )
}

export default NavLink
