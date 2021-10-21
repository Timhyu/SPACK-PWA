/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_MEGAMENU = gql`
  query getMegaMenuTree {
    amMegaMenuTree {
      items {
        column_count
        content
        icon
        id
        is_active
        label
        label_background_color
        label_text_color
        name
        subcategories_position
        submenu_type
        url_path: url
        width
        width_value
        children {
          column_count
          content
          icon
          id
          is_active
          label
          label_background_color
          label_text_color
          name
          subcategories_position
          submenu_type
          url_path: url
          width
          width_value
          children {
            column_count
            content
            icon
            id
            is_active
            label
            label_background_color
            label_text_color
            name
            subcategories_position
            submenu_type
            url_path: url
            width
            width_value
          }
        }
      }
    }
  }
`
