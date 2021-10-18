import unfetch from 'unfetch'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink, FetchOptions } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'

import deviceType from './device'
import { shrinkGETQuery } from './shrinkGETQuery'

const customFetchToShrinkQuery = (uri: string, options: any) => {
    let url = uri
    if (options.method === 'GET') {
      url = shrinkGETQuery(uri)
    }
    return deviceType.isMobile() ? unfetch(url, options) : fetch(url, options)
}

// HTTP options
let httpOptions: FetchOptions = {
    uri: `${process.env.VUE_APP_GRAPHQL_URL}/graphql`,
    credentials: 'same-origin',
    useGETForQueries: true,
}

httpOptions = Object.assign(httpOptions, {
    fetch: customFetchToShrinkQuery
})

// HTTP connection to the API
const httpLink: ApolloLink = createHttpLink({
    ...httpOptions
})

// HTTP headers middleware
const middlewareLink: ApolloLink = new ApolloLink((operation: any, forward: any) => {
    let useCookie: boolean = false
    let token: string = ''
    let currency: string = ''

    operation.setContext({
        headers: {
            'Authorization': `Bearer ${token}` || null,
            'Content-Currency': '',
            'Store': ''
        }
    })

    return forward(operation)
})

// HTTP errors done
const errorLink: ApolloLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message }, index: number) => {
            graphQLErrors[index].message = message.replace('GraphQL error: ', '')
        })
    }

    if (networkError) console.log(`[Network error]: ${networkError}`)
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
