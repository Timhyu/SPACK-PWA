/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { price_range } from '../fragment/priceRange'

export const GET_PRODUCT_RELATED = gql`
  query getRelatedProduct($filter: ProductAttributeFilterInput) {
    products(filter: $filter) {
      items {
        related: related_products {
          id
          sku
          name
          url_key
          small_image {
            label
            url
          }
          price_range {
            ...price_range
            __typename
          }
          review_count
          rating_summary
          stock_status
          __typename
        }
      }
    }
  }
  ${price_range}
`
