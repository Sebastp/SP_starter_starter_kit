import { ApolloClient } from 'apollo-client'
import { ApolloLink, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities'
import {LOCAL_SERVER_IP} from '../env'


const httpLink = new HttpLink({
  uri: 'http://'+LOCAL_SERVER_IP+':8080/graphql',
  options: {
    reconnect: true
  }
})

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  httpLink
)

const link = ApolloLink.from([terminatingLink])
const cache = new InMemoryCache()

const apollo = new ApolloClient({
  link: httpLink,
  cache,
  credentials: 'include'
})

export default apollo
