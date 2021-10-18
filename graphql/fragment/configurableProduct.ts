/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

import { customerVariant } from './customerVariant'

export const configurableProduct = gql`
  fragment configurableProduct on ConfigurableProduct {
    configurable_options {
      attribute_code
      id
      label
      position
      values {
        label
        swatch_data {
          value
        }
        use_default_value
        value_index
      }
    }
    variants {
      ...customerVariant
      __typename
    }
  }
  ${customerVariant}
`
