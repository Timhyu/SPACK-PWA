/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { price_range } from './priceRange'

export const bundleProduct = gql`
  fragment bundleProduct on BundleProduct {
    bundles: items {
      options {
        can_change_quantity
        id
        is_default
        label
        position
        price
        price_type
        quantity
        product {
          sku
          price_range {
            ...price_range
            __typename
          }
          stock_status
        }
      }
      position
      required
      sku
      title
      type
      option_id
    }
    ship_bundle_items
  }
  ${price_range}
`
