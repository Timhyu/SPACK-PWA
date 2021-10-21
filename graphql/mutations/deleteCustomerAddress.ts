/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const DELETE_CUSTOMER_ADDRESS = gql`
  mutation deleteCustomerAddress($id: Int!) {
    customerAddress: deleteCustomerAddress(id: $id)
  }
`
