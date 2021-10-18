/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { price_range } from './priceRange'

export const groupedProduct = gql`
  fragment groupedProduct on GroupedProduct {
    items {
      position
      product {
        name
        sku
        price_range {
          ...price_range
          __typename
        }
      }
      qty
    }
  }
  ${price_range}
`
