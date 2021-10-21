/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { price_range } from '../fragment/priceRange'
import { configurableProduct } from '../fragment/configurableProduct'

export const DELETE_WISHLISTITEM = gql`
  mutation deleteWishListItem($wishlistId: ID!, $wishlistItemsIds: [ID!]!) {
    removeProductsFromWishlist(
      wishlistId: $wishlistId
      wishlistItemsIds: $wishlistItemsIds
    ) {
      user_errors {
        code
        message
      }
      wishlist {
        key: id
        items {
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
            sku
            price_range {
              ...price_range
              __typename
            }
            ...configurableProduct
            rating_summary
            review_count
          }
          qty
        }
        items_count
        sharing_code
      }
    }
  }
  ${price_range}
  ${configurableProduct}
`
