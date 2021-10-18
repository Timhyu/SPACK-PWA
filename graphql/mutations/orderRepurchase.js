/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { cartItems } from '../fragment/cartItems'
import { cart_prices } from '../fragment/cartPrices'

export const ORDER_REPURCHASE = gql`
  mutation orderRepurchase($orderNumber: String!) {
    reorderItems(orderNumber: $orderNumber) {
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
      }
    }
  }
  ${cartItems}
  ${cart_prices}
`
