/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CUSTOMER_ADDRESS = gql`
  query getCustomerAddress {
    customer {
      addresses {
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
  }
`
