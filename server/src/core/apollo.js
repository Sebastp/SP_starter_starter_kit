import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from '~/core/schema'

const { PORT = 8080 } = process.env


const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:${PORT}/graphql`,
    settings: {
      'editor.theme': 'dark'
    }
  }
})

export default apollo
