/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CUSTOMER_ORDERS = gql`
  query getCustomerOrders(
    $filter: CustomerOrdersFilterInput
    $currentPage: Int
    $pageSize: Int
  ) {
    customer {
      orders(filter: $filter, currentPage: $currentPage, pageSize: $pageSize) {
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
    }
  }
`
