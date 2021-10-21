/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const customerVariant = gql`
  fragment customerVariant on ConfigurableVariant {
    attributes {
      code
      value_index
    }
    product {
      sku
      price_range {
        ...price_range
        __typename
      }
      stock_status
      media_gallery {
        label
        url
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
      }
    }
  }
`
