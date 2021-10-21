/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const bundleCartItem = gql`
  fragment bundleCartItem on BundleCartItem {
    bundle_options {
      label
      type
      id
      values {
        id
        label
        price
        quantity
      }
    }
    __typename
  }
`
