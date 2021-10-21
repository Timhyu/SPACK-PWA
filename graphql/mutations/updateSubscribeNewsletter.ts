/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const UPDATE_SUBSCRIBE_NEWSLETTER = gql`
  mutation updateSubscribeNewsletter($is_subscribed: Boolean) {
    updateCustomer(input: { is_subscribed: $is_subscribed }) {
      customer {
        is_subscribed
      }
    }
  }
`
