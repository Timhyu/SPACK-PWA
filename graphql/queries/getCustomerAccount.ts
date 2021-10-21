/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { addresses } from '../fragment/addresses'
import { orders } from '../fragment/orders'

export const GET_CUSTOMER_ACCOUNT = gql`
  query getCustomerAccount(
    $filter: CustomerOrdersFilterInput
    $currentPage: Int
    $pageSize: Int
  ) {
    customer {
      default_billing
      default_shipping
      email
      firstname
      is_subscribed
      lastname
      addresses {
        ...addresses
      }
      wishlist {
        id
        sharing_code
      }
      orders(filter: $filter, currentPage: $currentPage, pageSize: $pageSize) {
        ...orders
      }
    }
  }
  ${addresses}
  ${orders}
`
