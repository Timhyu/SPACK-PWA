/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const LOGIN_AS_CUSTOMER_MUTATION = gql`
  mutation generateCustomerTokenAsAdmin($email: String!) {
    loginAsCustomer: generateCustomerTokenAsAdmin(
      input: { customer_email: $email }
    ) {
      token: customer_token
    }
  }
`
