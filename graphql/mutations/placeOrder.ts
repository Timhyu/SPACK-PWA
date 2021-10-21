/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const PLACE_ORDER = gql`
  mutation placeOrder($cart_id: String!) {
    placeOrder(input: { cart_id: $cart_id }) {
      order {
        order_id
      }
    }
  }
`
