/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const CREATE_CUSTOMER_ADDRESS = gql`
  mutation createCustomerAddress($address: CustomerAddressInput!) {
    customerAddress: createCustomerAddress(input: $address) {
      city
      company
      country_code
      default_billing
      default_shipping
      firstname
      key: id
      lastname
      postcode
      region {
        region
        region_code
        region_id
      }
      region_id
      street
      telephone
    }
  }
`
