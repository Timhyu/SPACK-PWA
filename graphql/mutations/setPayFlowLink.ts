/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const SET_PATFLOW_LINK = gql`
  mutation setPayFlowLink(
    $cart_id: String!
    $code: String!
    $cancel_url: String!
    $error_url: String!
    $return_url: String!
  ) {
    setPaymentMethodOnCart(
      input: {
        cart_id: $cart_id
        payment_method: {
          code: $code
          payflow_link: {
            cancel_url: $cancel_url
            error_url: $error_url
            return_url: $return_url
          }
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
