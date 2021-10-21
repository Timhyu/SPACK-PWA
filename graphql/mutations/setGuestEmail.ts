/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const SET_GUEST_EMAIL = gql`
  mutation setGuestEmail($cart_id: String!, $email: String!) {
    setGuestEmailOnCart(input: { cart_id: $cart_id, email: $email }) {
      cart {
        email
      }
    }
  }
`
