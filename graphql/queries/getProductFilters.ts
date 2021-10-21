/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_PRODUCT_FILTERS = gql`
  query getProductFilters(
    $search: String
    $filters: ProductAttributeFilterInput
  ) {
    productFilters: products(search: $search, filter: $filters) {
      aggregations {
        label
        count
        attribute_code
        options {
          count
          label
          value
        }
      }
    }
  }
`
