/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_SLIDER = gql`
  query getSlider($identifier: String!) {
    slider(identifier: $identifier) {
      banners {
        banner_name
        banner_status
        caption
        click_url
        end_time
        id
        image
        alt: image_alt
        start_time
        target
      }
      slider_status
    }
  }
`
