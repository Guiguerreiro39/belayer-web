import create from 'zustand';
import nookies from 'nookies'
import { gql } from '@apollo/client';
import { initializeApollo } from '@/utils/apollo.client';

// Types
type User = {
  firstName: string;
  email: string;
  level: number;
};

// Queries
const GET_ME = gql`
  query {
    getMe {
      email, 
      firstName, 
      level
    }
  }
`;

// Functions
const setToken = (token: string) => {
  const cookieName = process.env.NEXT_PUBLIC_AUTH_COOKIE
  if (cookieName) nookies.set(null, cookieName, `${token}`)
}

const checkAuth = async (): Promise<User | undefined> => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: GET_ME,
    errorPolicy: 'all'
  });

  return data?.getMe ?? undefined
}

// Zustand implementation
type Store = {
  user: User | undefined;
  error: string;
  login: (user: User) => void;
  authInit: () => void;
  notifyError: (error: string) => void;
};

export const useStore = create<Store>((set) => ({
  user: undefined,
  error: "",
  login(user: User) {
    // setToken(token)
    set((state) => ({
      ...state,
      user,
    }));
  },
  async authInit() {
    const user = await checkAuth()
    set((state) => ({
      ...state,
      user
    }))
  },
  notifyError(error: string) {
    set((state) => ({
      ...state,
      error
    }))
  }
}));
