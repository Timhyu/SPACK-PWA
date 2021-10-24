import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { createHttpLink, FetchOptions } from 'apollo-link-http'
import { onError } from 'apollo-link-error'

import { shrinkGETQuery } from './shrinkGETQuery'

// Intercept and shrink URLs from GET queries. Using
// GET makes it possible to use edge caching in Magento
// Cloud, but risks exceeding URL limits with default usage
// of Apollo's http link. `shrinkGETQuery` encodes the URL
// in a more efficient way.
const customFetchToShrinkQuery = (uri: string, options: any) => {
  let url = uri
  if (options.method === 'GET') {
    url = shrinkGETQuery(uri)
  }
  return fetch(url, options)
}

const getApolloUri = () => {
  const isProd = process.env.NODE_ENV === 'production'

  return isProd
    ? `${process.env.VUE_APP_GRAPHQL_URL}/graphql`
    : `${process.env.VUE_APP_HOST}/graphql`
}

// HTTP options
let httpOptions: FetchOptions = {
  uri: getApolloUri(),
  credentials: 'same-origin',
  useGETForQueries: true
}

httpOptions = Object.assign(httpOptions, {
  fetch: customFetchToShrinkQuery
})

// HTTP connection to the API
const httpLink: ApolloLink = createHttpLink({
  ...httpOptions
})

// HTTP headers middleware
const middlewareLink: ApolloLink = new ApolloLink(
  (operation: any, forward: any) => {
    const useCookie = false
    const token = ''
    const currency = ''

    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}` || null,
        'Content-Currency': '',
        Store: ''
      }
    })

    return forward(operation)
  }
)

// HTTP errors done
const errorLink: ApolloLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }, index: number) => {
      graphQLErrors[index].message = message.replace('GraphQL error: ', '')
    })
  }

  if (networkError) {
    const Console: any = console
    Console.log(`[Network error]: ${networkError}`)
  }
})

// Cache implementation
const cache: InMemoryCache = new InMemoryCache({
  addTypename: false,
  resultCaching: false
})

// Merge http to middleware
const apolloLink: ApolloLink = middlewareLink.concat(httpLink)

// Create the apollo client
const apolloClient: any = new ApolloClient({
  link: errorLink.concat(apolloLink),
  cache,
  connectToDevTools: true
})

// Create the apolo options
const apollo: any = {
  defaultClient: apolloClient,
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first'
    }
  }
}

export default apollo
