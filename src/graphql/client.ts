import { GraphQLClient } from 'graphql-request'

// definindo endpoint do graphql
const endpoint = process.env.GRAPHQL_HOST || ''

// definindo cliente do graphql
const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
