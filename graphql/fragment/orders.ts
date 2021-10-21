/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const orders = gql`
  fragment orders on CustomerOrders {
    items {
      key: id
      number
      status
      shipping_address {
        firstname
        lastname
      }
      total {
        grand_total {
          value
        }
      }
      order_date
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
`
