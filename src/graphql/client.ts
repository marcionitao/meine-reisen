import { GraphQLClient } from 'graphql-request'

// definindo endpoint do graphql
const endpoint = process.env.NEXT_GRAPHQL_HOST || ''

// definindo cliente do graphql
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_GRAPHQL_TOKEN}`
  }
})

export default client
