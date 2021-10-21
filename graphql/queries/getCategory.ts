/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CATEGORY = gql`
  query getCategory($id: String!) {
    categories: categoryList(filters: { ids: { eq: $id } }) {
      id
      name
      url_path
      display_mode
      default_sort: default_sort_by
      description
      image
      is_anchor
      meta_title
      meta_keywords
      meta_description
      breadcrumbs {
        category_id
        category_name
        category_url_path
      }
    }
  }
`
