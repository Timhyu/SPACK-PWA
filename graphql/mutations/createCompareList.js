/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const CREATE_COMPARE_LIST = gql`
  mutation createCompareList($id: [ID]) {
    createCompareList(input: { products: $id }) {
      uid
      attributes {
        code
        label
      }
      item_count
      items {
        uid
        sku
        name
        description {
          html
        }
      }
    }
  }
`
