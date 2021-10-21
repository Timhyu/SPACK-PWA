/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { price_range } from './priceRange'
import { configurableCart } from './configurableCart'
import { downloadableCart } from './downloadableCart'
import { bundleCartItem } from './bundleCartItem'

export const cartItems = gql`
  fragment cartItems on Cart {
    items {
      id
      product {
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
      }
      quantity
      prices {
        discounts {
          amount {
            value
          }
        }
        row_total {
          currency
          value
        }
        price {
          value
        }
      }
      ...configurableCart
      ...downloadableCart
      ...bundleCartItem
      __typename
    }
  }
  ${price_range}
  ${configurableCart}
  ${downloadableCart}
  ${bundleCartItem}
`
