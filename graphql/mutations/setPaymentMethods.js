/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const SET_PAYMENT_METHODS = gql`
  mutation setPaymentMethods($cart_id: String!, $method: PaymentMethodInput!) {
    setPaymentMethodOnCart(
      input: { cart_id: $cart_id, payment_method: $method }
    ) {
      cart {
        selected_payment_method {
          code
          title
        }
      }
    }
  }
`
