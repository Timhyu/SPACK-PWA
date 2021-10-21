/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { price_range } from '../fragment/priceRange'
import { configurableProduct } from '../fragment/configurableProduct'

export const GET_PRODUCT_SEARCH = gql`
  query getProductSearch(
    $search: String
    $filters: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
    $sort: ProductAttributeSortInput
  ) {
    products(
      search: $search
      pageSize: $pageSize
      currentPage: $currentPage
      filter: $filters
      sort: $sort
    ) {
      items {
        id
        name
        sku
        url_key
        small_image {
          label
          url
        }
        price_range {
          ...price_range
          __typename
        }
        ...configurableProduct
        stock_status
        review_count
        rating_summary
        special_from_date
        special_to_date
        __typename
      }
      total_count
    }
  }
  ${price_range}
  ${configurableProduct}
`
