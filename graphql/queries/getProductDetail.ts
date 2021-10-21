/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { price_range } from '../fragment/priceRange'
import { bundleProduct } from '../fragment/bundleProduct'
import { configurableProduct } from '../fragment/configurableProduct'
import { downloadableProduct } from '../fragment/downloadableProduct'
import { groupedProduct } from '../fragment/groupedProduct'

export const GET_PRODUCT_DETAIL = gql`
  query getProductDetail($filter: ProductAttributeFilterInput) {
    products(filter: $filter) {
      items {
        categories {
          breadcrumbs {
            category_id
            category_name
            category_url_path
          }
          id
          name
          url_path
        }
        id
        sku
        name
        url_key
        image {
          label
          url
        }
        meta_title
        meta_keyword
        meta_description
        price_range {
          ...price_range
          __typename
        }
        stock_status
        description {
          html
        }
        short_description {
          html
        }
        media_gallery {
          disabled
          label
          position
          thumbnail: url
          ... on ProductVideo {
            video_content {
              media_type
              video_provider
              video_url
              video_title
              video_description
              video_metadata
            }
          }
          __typename
        }
        review_count
        rating_summary
        ...bundleProduct
        ...configurableProduct
        ...downloadableProduct
        ...groupedProduct
        __typename
      }
    }
  }
  ${price_range}
  ${bundleProduct}
  ${configurableProduct}
  ${downloadableProduct}
  ${groupedProduct}
`
