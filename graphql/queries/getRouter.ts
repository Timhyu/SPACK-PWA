/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_ROUTER = gql`
  query getRouter($url: String!) {
    urlResolver(url: $url) {
      id
      redirectCode
      relative_url
      type
    }
  }
`
