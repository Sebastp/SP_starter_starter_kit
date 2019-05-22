import { merge } from 'lodash'
import * as blocks from '~/blocks'

const typeDefs = []
const resolverFragments = []



for (const block of Object.values(blocks)) {
  if (block.typeDefs) {
    typeDefs.push(block.typeDefs)
  }
  if (block.resolvers) {
    resolverFragments.push(block.resolvers)
  }
}

export { typeDefs }
export const resolvers = merge(...resolverFragments)
