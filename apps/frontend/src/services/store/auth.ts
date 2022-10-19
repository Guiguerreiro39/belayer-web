import create from 'zustand'

// Zustand implementation
type Store = {
  user: { __typename?: 'UserResponse' | undefined } | undefined
  setUser: (user?: { __typename?: 'UserResponse' | undefined } | undefined) => void
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
