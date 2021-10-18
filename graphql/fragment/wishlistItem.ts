/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { price_range } from './priceRange'

export const wishlistItem = gql`
  fragment wishlistItem on WishlistItem {
    added_at
    description
    key: id
    product {
      key: id
      image {
        url
        label
      }
      url_key
      name
      price_range {
        ...price_range
        __typename
      }
      rating_summary
      review_count
    }
    qty
  }
  ${price_range}
`
