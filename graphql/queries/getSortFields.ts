/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_SORT_FIELDS = gql`
  query getSortFields($search: String, $filters: ProductAttributeFilterInput) {
    productSort: products(search: $search, filter: $filters) {
      sort_fields {
        default
        options {
          label
          value
        }
      }
    }
  }
`
