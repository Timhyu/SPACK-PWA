/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import gql from 'graphql-tag'

export const GET_CMS_BLOCK = gql`
  query getCmsBlock($identifiers: [String]!) {
    cmsBlocks(identifiers: $identifiers) {
      items {
        content
        identifier
        title
      }
    }
  }
`
