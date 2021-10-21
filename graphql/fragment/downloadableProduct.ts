/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const downloadableProduct = gql`
  fragment downloadableProduct on DownloadableProduct {
    links: downloadable_product_links {
      id
      price
      sample_url
      sort_order
      title
    }
    samples: downloadable_product_samples {
      id
      sample_url
      sort_order
      title
    }
  }
`
