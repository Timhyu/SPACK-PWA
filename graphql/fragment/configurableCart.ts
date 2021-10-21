/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const configurableCart = gql`
  fragment configurableCart on ConfigurableCartItem {
    configurable_options {
      id
      option_label
      value_label
    }
  }
`
