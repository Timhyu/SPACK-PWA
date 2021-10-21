/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { price_range } from '../fragment/priceRange'

export const GET_QUICK_SEARCH = gql`
  query getQuickSearch(
    $search: String
    $filter: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
    $sort: ProductAttributeSortInput
  ) {
    products(
      search: $search
      filter: $filter
      pageSize: $pageSize
      currentPage: $currentPage
      sort: $sort
    ) {
      items {
        id
        name
        sku
        type_id
        url_key
        thumbnail {
          label
          url
        }
        price_range {
          ...price_range
          __typename
        }
        stock_status
      }
      total_count
    }
  }
  ${price_range}
`
