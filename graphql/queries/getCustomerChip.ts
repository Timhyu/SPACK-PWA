/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CUSTOMER_CHIP = gql`
  query getCustomerChip {
    customer {
      email
      firstname
      lastname
      default_billing
      default_shipping
      wishlist {
        id
        sharing_code
      }
    }
  }
`
