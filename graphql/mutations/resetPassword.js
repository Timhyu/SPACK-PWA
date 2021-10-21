/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const RESET_PASSWORD = gql`
  mutation resetPassword(
    $email: String!
    $token: String!
    $newPassword: String!
  ) {
    resetPassword(
      email: $email
      resetPasswordToken: $token
      newPassword: $newPassword
    )
  }
`
