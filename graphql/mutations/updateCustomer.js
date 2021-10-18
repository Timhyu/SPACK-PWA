/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const UPDATE_CUSTOMER_MUTATION = gql`
  mutation updateCustomer($customer: CustomerInput!) {
    updateCustomer(input: $customer) {
      customer {
        default_billing
        default_shipping
        email
        firstname
        is_subscribed
        lastname
      }
    }
  }
`
