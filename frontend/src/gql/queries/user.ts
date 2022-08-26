import { gql } from '@apollo/client';

// Queries
export const GET_ME = gql`
  query {
    getMe {
      id,
      email, 
      firstName,
      lastName,
      level
    }
  }
`;