/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const SET_PAYFLOW_PRO = gql`
  mutation setPayFlowPro(
    $cart_id: String!
    $code: String!
    $cc_exp_month: Int!
    $cc_exp_year: Int!
    $cc_last_4: Int!
    $cc_type: String!
  ) {
    setPaymentMethodOnCart(
      input: {
        cart_id: $cart_id
        payment_method: {
          code: $code
          payflowpro: {
            cc_details: {
              cc_exp_month: $cc_exp_month
              cc_exp_year: $cc_exp_year
              cc_last_4: $cc_last_4
              cc_type: $cc_type
            }
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
