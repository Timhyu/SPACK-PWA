/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const CREATE_REVIEW_MUTATION = gql`
  mutation createProductReview(
    $nickname: String!
    $ratings: [ProductReviewRatingInput]!
    $sku: String!
    $summary: String!
    $text: String!
  ) {
    createProductReview(
      input: {
        nickname: $nickname
        ratings: $ratings
        sku: $sku
        summary: $summary
        text: $text
      }
    ) {
      review {
        average_rating
        nickname
        summary
        text
      }
    }
  }
`
