import { useEffect } from 'react';
import { useStore } from '@/services/store'

interface GuardProps {
  children: JSX.Element;
  excludedRoutes?: string[];
}

const Guard = ({ children, excludedRoutes }: GuardProps) => {
  const store = useStore();

  useEffect(() => {
    store.authInit()
  }, [])

  return <>{children}</>
}

export default Guard;