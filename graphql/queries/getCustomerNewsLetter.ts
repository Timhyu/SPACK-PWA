/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CUSTOMER_NEWS_LETTER = gql`
  query getCustomerNewsLetter {
    customer {
      subscribed: is_subscribed
    }
  }
`
