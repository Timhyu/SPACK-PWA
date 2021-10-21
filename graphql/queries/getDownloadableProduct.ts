/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_PRODUCT_DOWNLOAD = gql`
  query getDownloadableProduct {
    downloadable: customerDownloadableProducts {
      items {
        date
        download_url
        order_increment_id
        remaining_downloads
        status
      }
    }
  }
`
