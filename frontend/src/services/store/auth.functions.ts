import { initializeApollo } from '@/services/apollo/client';
import { User } from '@/types';
import { GET_ME } from '@/gql/queries/user';
import { LOGIN, LOGOUT } from '@/gql/mutations/auth';

const apolloClient = initializeApollo()

export const checkAuth = async (): Promise<User | undefined> => {
  const { data } = await apolloClient.query({
    query: GET_ME,
    errorPolicy: 'all'
  });

  return data?.getMe ?? undefined
}

export const login = async (email: string, password: string) => {
  const { data } = await apolloClient.mutate({
    mutation: LOGIN,
    variables: {
      input: {
        email,
        password,
      },
    },
    errorPolicy: 'all'
  });

  return data?.login ?? undefined
};

export const logout = async () => {
  await apolloClient.mutate({
    mutation: LOGOUT,
    errorPolicy: 'all'
  });
}