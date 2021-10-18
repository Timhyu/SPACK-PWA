/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const REVOKE_TOKEN_MUTATION = gql`
  mutation revokeCustomerToken {
    revokeCustomerToken {
      result
    }
  }
`
