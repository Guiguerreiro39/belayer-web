import create from 'zustand';
import { User } from '@/types';
import * as auth from './auth.functions'

// Zustand implementation
type Store = {
  user: User | undefined;
  login: (email: string, password: string) => void;
  logout: () => void;
  authInit: () => void;
};

export const useAuthStore = create<Store>((set) => ({
  user: undefined,
  login: async (email: string, password: string) => {
    const user = await auth.login(email, password)
    set((state) => ({
      ...state,
      user,
    }));
  },
  logout: async () => {
    await auth.logout()
    set((state) => ({
      ...state,
      user: undefined
    }))
  },
  authInit: async () => {
    const user = await auth.checkAuth()
    set((state) => ({
      ...state,
      user
    }))
  },
}));
