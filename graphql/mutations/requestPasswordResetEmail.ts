/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const REQUEST_PASSWORD_RESET_EMAIL = gql`
  mutation requestPasswordResetEmail($email: String!) {
    requestPasswordResetEmail(email: $email)
  }
`
