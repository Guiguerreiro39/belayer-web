import create from 'zustand';
import { User } from '@/types';
import * as auth from './auth.functions'

// Zustand implementation
type Store = {
  user: User | undefined;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  authInit: () => Promise<boolean>;
};

export const useAuthStore = create<Store>((set) => ({
  user: undefined,
  login: async (email: string, password: string): Promise<boolean> => {
    const user = await auth.login(email, password)
    set((state) => ({
      ...state,
      user,
    }));

    return !!user
  },
  logout: async () => {
    const user = await auth.logout()
    set((state) => ({
      ...state,
      user: undefined
    }))

    return !!user
  },
  authInit: async () => {
    const user = await auth.checkAuth()
    set((state) => ({
      ...state,
      user
    }))

    return !!user
  },
}));
