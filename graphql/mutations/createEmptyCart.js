/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const CREATE_CART_MUTATION = gql`
  mutation createEmptyCart($cart_id: String) {
    createEmptyCart(input: { cart_id: $cart_id })
  }
`
