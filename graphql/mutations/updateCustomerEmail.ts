/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const UPDATE_EMAIL_MUTATION = gql`
  mutation updateCustomerEmail($email: String!, $password: String!) {
    updateCustomerEmail(input: { email: $email, password: $password }) {
      customer {
        email
      }
    }
  }
`
