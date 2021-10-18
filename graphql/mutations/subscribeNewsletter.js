/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const NEWSLETTER_MUTATION = gql`
  mutation subscribeNewsletter($email: String!) {
    subscribeEmailToNewsletter(email: $email) {
      status
    }
  }
`
