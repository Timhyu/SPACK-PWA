/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      regions: available_regions {
        code
        id
        name
      }
      name: full_name_locale
      id
    }
  }
`
