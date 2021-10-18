/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CATEGOR_TREE = gql`
  query getCategoryTree {
    categoryList {
      id
      children {
        id
        name
        url_path
        include_in_menu
        position
        children {
          id
          name
          url_path
          include_in_menu
          position
          children {
            id
            name
            url_path
            include_in_menu
            position
          }
        }
      }
    }
  }
`
