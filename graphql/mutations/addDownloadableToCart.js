/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const ADD_DOWANLOAD_MUTATION = gql`
  mutation addDownloadableToCart(
    $cart_id: String!
    $cartItems: [DownloadableProductCartItemInput]!
  ) {
    addToCart: addDownloadableProductsToCart(
      input: { cart_id: $cart_id, cart_items: $cartItems }
    ) {
      cart {
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
  }
  ${cartItems}
  ${cart_prices}
  ${shippingAddress}
`
