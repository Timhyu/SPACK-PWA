/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CMS_PAGE = gql`
  query getCmsPage($id: Int, $identifier: String) {
    cmsPage(id: $id, identifier: $identifier) {
      content
      content_heading
      identifier
      meta_description
      meta_keywords
      meta_title
      page_layout
      title
      url_key
    }
  }
`
