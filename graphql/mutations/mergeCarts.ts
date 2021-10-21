/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const MERGE_CARTS = gql`
  mutation mergeCarts($source_cart_id: String!, $destination_cart_id: String!) {
    mergeCarts(
      source_cart_id: $source_cart_id
      destination_cart_id: $destination_cart_id
    ) {
      id
      email
      is_virtual
      ...cartItems
      prices {
        ...cart_prices
      }
      total_quantity
      applied_coupons {
        code
      }
      shipping_addresses {
        ...shippingAddress
      }
      available_payment_methods {
        code
        title
      }
    }
  }
  ${cartItems}
  ${cart_prices}
  ${shippingAddress}
`
