/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const SET_PAYPAL_EXPRESS = gql`
  mutation setPayPalExpressPayment(
    $cart_id: String!
    $code: String!
    $payer_id: String!
    $token: String!
  ) {
    setPaymentMethodOnCart(
      input: {
        cart_id: $cart_id
        payment_method: {
          code: $code
          payflow_express: { payer_id: $payer_id, token: $token }
        }
      }
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
