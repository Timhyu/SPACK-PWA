/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_STORES = gql`
  query getStores($useCurrent: Boolean) {
    availableStores(useCurrentGroup: $useCurrent) {
      code: store_code
      is_default: is_default_store
      name: store_name
      order: store_sort_order
    }
  }
`
