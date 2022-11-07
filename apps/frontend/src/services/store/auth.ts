import { UserResponse } from '@/graphql/schema'
import create from 'zustand'

// Zustand implementation
type Store = {
  user: Partial<UserResponse> | undefined
  setUser: (user?: Partial<UserResponse> | undefined) => void
}

export const useAuthStore = create<Store>((set) => ({
  user: undefined,
  setUser: (user = undefined) => {
    set((state) => ({
      ...state,
      user,
    }))
  },
}))
