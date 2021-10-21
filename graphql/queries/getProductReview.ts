/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_PRODUCT_REVIEW = gql`
  query getProductReview($filter: ProductAttributeFilterInput) {
    products(filter: $filter) {
      items {
        reviews {
          items {
            average_rating
            created_at
            nickname
            summary
            text
          }
          page_info {
            current_page
            page_size
            total_pages
          }
        }
      }
    }
    productReviewRatingsMetadata {
      items {
        id
        name
        values {
          value
          value_id
        }
      }
    }
  }
`
