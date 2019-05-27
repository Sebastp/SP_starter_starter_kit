import mongoose from 'mongoose'

/**
 * Registers a Mongoose model, or returns the existing model if registered.
 */
function model({ name, schema, index }) {
  if (mongoose.models[name]) {
    // the model has already been registered
    return mongoose.models[name]
  } else {
    // register a new model
    const ModelSchema = new mongoose.Schema(schema)
    if (index) {
      ModelSchema.index(index)
    }
    return mongoose.model(name, ModelSchema)
  }
}

export default model
