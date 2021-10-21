/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const HANDLE_PAYFLOW_PRO = gql`
  mutation handlePayflowProResponse(
    $cart_id: String!
    $paypal_payload: String!
  ) {
    handlePayflowProResponse(
      input: { cart_id: $cart_id, paypal_payload: $paypal_payload }
    ) {
      cart {
        selected_payment_method {
          code
          purchase_order_number
          title
        }
      }
    }
  }
`
