/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const price_range = gql`
  fragment price_range on PriceRange {
    minimum_price {
      discount {
        amount_off
      }
      final_price {
        value
      }
      regular_price {
        value
      }
    }
    maximum_price {
      discount {
        amount_off
      }
      final_price {
        value
      }
      regular_price {
        value
      }
    }
  }
`
