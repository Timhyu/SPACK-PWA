/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const SET_BILLING_ADDRESSES = gql`
  mutation setBillingAddresses(
    $cart_id: String!
    $addresses: BillingAddressInput!
  ) {
    setBillingAddressOnCart(
      input: { cart_id: $cart_id, billing_address: $addresses }
    ) {
      cart {
        billing_address {
          city
          company
          country {
            code
            label
          }
          firstname
          lastname
          postcode
          region {
            code
            label
            region_id
          }
          street
          telephone
        }
      }
    }
  }
`
