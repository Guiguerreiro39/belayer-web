import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(loginInput: $input) {
      id
      email
      firstName
      lastName
      level
    }
  }
`;

export const LOGOUT = gql`
  mutation login {
    logout {
      id
      email
      lastName
      firstName
      level
    }
  }
`;