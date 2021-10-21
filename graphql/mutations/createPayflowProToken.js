/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const CREAT_PAYFLOW_TOKEN = gql`
  mutation createPayflowProToken(
    $cart_id: String!
    $cancel_url: String!
    $return_url: String!
    $error_url: String!
  ) {
    createPayflowProToken(
      input: {
        cart_id: $cart_id
        urls: {
          cancel_url: $cancel_url
          return_url: $return_url
          error_url: $error_url
        }
      }
    ) {
      response_message
      result
      result_code
      secure_token
      secure_token_id
    }
  }
`
