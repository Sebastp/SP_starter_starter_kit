import gql from 'graphql-tag'


// extend type Query -- on every next
export default gql`
  type Query {
    examples(uid: String!): [Example]
  }

  type Example {
    uid: String!
    title: String
  }
`
