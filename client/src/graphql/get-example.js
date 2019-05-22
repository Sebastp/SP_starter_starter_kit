import gql from 'graphql-tag'

export const getExample = gql`
  query Example {
    examples {
      uid
    }
  }
`
