import { Collection } from './models'

const Query = {
  examples: () => {
    return Example.find().exec()
  }
}

export default {
  Query
}
