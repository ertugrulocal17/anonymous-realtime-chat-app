import { gql } from '@apollo/client';
export const POST_MESSAGE = gql`
  mutation ($user: String!, $text: String!) {
    postMessage(user: $user, text: $text)
  }
`;
