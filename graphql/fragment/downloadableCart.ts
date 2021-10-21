/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const downloadableCart = gql`
  fragment downloadableCart on DownloadableCartItem {
    links {
      id
      price
      sample_url
      title
    }
  }
`
