import { useRouter } from 'next/router';
import { ComponentType } from 'react';
import { useIsAuthenticated } from '@/context/auth';

export default function withAuth<Prop>(ProtectedComponent: ComponentType<Prop>) {
  return (props: Prop) => {
    if (typeof window === 'undefined') return null

    const Router = useRouter();
    const isAuthenticated = useIsAuthenticated()

    if (!isAuthenticated) {
      Router.replace('/login');
      return null
    }

    return <ProtectedComponent {...props} />;
  };
}