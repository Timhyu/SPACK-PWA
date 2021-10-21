/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const UPDATE_CART_MUTATION = gql`
  mutation updateItemsFromCart(
    $cart_id: String!
    $cart_item_id: Int!
    $quantity: Float!
  ) {
    updateCartItems(
      input: {
        cart_id: $cart_id
        cart_items: { cart_item_id: $cart_item_id, quantity: $quantity }
      }
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
