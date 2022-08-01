import { ApolloError } from '@apollo/client';
import create from 'zustand';

type User = {
  firstName: string;
  email: string;
  level: number;
};

// Zustand implementation
type Store = {
  token: string;
  user: User | undefined;
  error: ApolloError | undefined;
  login: (token: string, user: User) => void;
  notifyError: (error: ApolloError) => void;
};

export const useStore = create<Store>((set) => ({
  token: '',
  user: undefined,
  error: undefined,
  login(token: string, user: User) {
    set((state) => ({
      ...state,
      user,
      token: `Bearer ${token}`,
    }));
  },
  notifyError(error: ApolloError) {
    set((state) => ({
      ...state,
      error
    }))
  }
}));
