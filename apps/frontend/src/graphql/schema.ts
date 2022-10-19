import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type ActivityInput = {
  location: Scalars['String'];
  title: Scalars['String'];
  users: Array<Scalars['String']>;
};

export type ActivityResponse = {
  __typename?: 'ActivityResponse';
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  locationId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
  userIds: Array<Scalars['String']>;
};

export type LocationInput = {
  address: Scalars['String'];
  country: Scalars['String'];
};

export type LocationResponse = {
  __typename?: 'LocationResponse';
  address: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['Date'];
  difficulty: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActivity: ActivityResponse;
  createLocation: LocationResponse;
  createRoute: RouteResponse;
  login: UserResponse;
  logout: UserResponse;
  signup: UserResponse;
};


export type MutationCreateActivityArgs = {
  activityInput: ActivityInput;
};


export type MutationCreateLocationArgs = {
  locationInput: LocationInput;
};


export type MutationCreateRouteArgs = {
  routeInput: RouteInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationSignupArgs = {
  userInput: UserInput;
};

export type Query = {
  __typename?: 'Query';
  getActivity: ActivityResponse;
  getAllActivities: Array<ActivityResponse>;
  getAllLocations: Array<LocationResponse>;
  getAllRoutes: Array<RouteResponse>;
  getAllUsers: Array<UserResponse>;
  getLocation: LocationResponse;
  getMe: UserResponse;
  getRoute: RouteResponse;
  getUserByEmail: UserResponse;
};


export type QueryGetActivityArgs = {
  id: Scalars['String'];
};


export type QueryGetLocationArgs = {
  id: Scalars['String'];
};


export type QueryGetRouteArgs = {
  id: Scalars['String'];
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String'];
};

export type RouteInput = {
  level: Scalars['Float'];
  location: Scalars['String'];
  type: Scalars['String'];
};

export type RouteResponse = {
  __typename?: 'RouteResponse';
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  level: Scalars['Float'];
  locationId: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  level: Scalars['Float'];
  password: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', user: { __typename?: 'UserResponse', id: string, email: string, firstName: string, lastName: string, level: number } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', user: { __typename?: 'UserResponse', id: string } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', user: { __typename?: 'UserResponse', id: string, email: string, firstName: string, lastName: string, level: number } };


export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  user: login(loginInput: $input) {
    id
    email
    firstName
    lastName
    level
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  user: logout {
    id
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const GetMeDocument = gql`
    query getMe {
  user: getMe {
    id
    email
    firstName
    lastName
    level
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;