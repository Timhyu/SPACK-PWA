/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CURRENCY = gql`
  query getCurrency {
    currency {
      available_currency_codes
      code: default_display_currency_code
      symbol: default_display_currency_symbol
    }
  }
`
