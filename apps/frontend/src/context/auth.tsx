import { createContext, useContext } from 'react'
import { useAuthStore } from '@/services/store/auth'
import { UserResponse } from '@/graphql/schema'

type AuthContextType = {
  isAuthenticated: boolean
}

type AuthContextPropsType = {
  children: JSX.Element
  user: Partial<UserResponse> | undefined
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children, user }: AuthContextPropsType) {
  const store = useAuthStore()

  // Check if the user is authenticated
  const isAuthenticated = !!user

  // Save user to store if exists
  // if (isAuthenticated) store.setUser(user)

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function useIsAuthenticated() {
  const context = useAuth()
  return context.isAuthenticated
}
