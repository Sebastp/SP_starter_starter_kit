import model from '~/helpers/model'

export const Examples = model({
  name: 'Examples',
  schema: {
    uid: String,
    title: String
  }
})
