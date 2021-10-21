/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CUSTOMER_INFO = gql`
  query getCustomerInfo {
    customer {
      default_billing
      default_shipping
      email
      firstname
      is_subscribed
      lastname
    }
  }
`
