/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_GUEST_EMAIL = gql`
  query getGuestEmail($email: String!) {
    isEmailAvailable(email: $email) {
      is_email_available
    }
  }
`
