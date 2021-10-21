/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { price_range } from '../fragment/priceRange'

export const DELETE_COMPARE_LIST = gql`
  mutation removeProductsFromCompareList($products: [ID]!, $uid: ID!) {
    removeProductsFromCompareList(input: { products: $products, uid: $uid }) {
      uid
      items {
        product {
          id
          stock_status
          image {
            url
            label
          }
          url_key
          name
          sku
          small_image {
            disabled
            label
            position
            url
          }
          price_range {
            ...price_range
            __typename
          }
        }
      }
    }
  }
  ${price_range}
`
