/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CUSTOMER_REVIEW = gql`
  query getCustomerReview($currentPage: Int, $pageSize: Int) {
    customer {
      reviews(currentPage: $currentPage, pageSize: $pageSize) {
        items {
          average_rating
          created_at
          product {
            id
            name
            image {
              label
              url
            }
            rating_summary
            review_count
            url_key
            __typename
          }
          ratings_breakdown {
            name
            value
          }
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
`
