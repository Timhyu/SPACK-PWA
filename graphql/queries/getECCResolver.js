/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_ECC_RESOLVER = gql`
  query getECCResolver($skus: [String]!) {
    eccResolver(skus: $skus) {
      base_price
      customer_price
      qty
      sku
    }
  }
`
