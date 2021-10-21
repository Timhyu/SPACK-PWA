/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const CREAT_EXPRESS_TOKEN = gql`
  mutation createPaypalExpressToken(
    $cart_id: String!
    $code: String!
    $express_button: Boolean
    $cancel_url: String!
    $return_url: String!
    $success_url: String
    $pending_url: String
    $use_paypal_credit: Boolean
  ) {
    createPaypalExpressToken(
      input: {
        cart_id: $cart_id
        code: $code
        express_button: $express_button
        urls: {
          cancel_url: $cancel_url
          return_url: $return_url
          success_url: $success_url
          pending_url: $pending_url
        }
        use_paypal_credit: $use_paypal_credit
      }
    ) {
      token
      paypal_urls {
        edit
        start
      }
    }
  }
`
