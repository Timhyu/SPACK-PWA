/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'
import { shippingAddress } from '../fragment/shippingAddress'

export const APPLY_GIFT_CART = gql`
  mutation applyGiftCardToCart($cart_id: String!, $gift_card_code: String!) {
    applyGiftCardToCart(
      input: {
        cart_id: $cart_id,
        gift_card_code: $gift_card_code
      }
    ){
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
  ${cartItems}
  ${cart_prices}
  ${shippingAddress}
`
