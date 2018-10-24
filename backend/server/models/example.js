const mongoose = require('mongoose')
const { v4 } = require('uuid')

const ExampleSchema = new mongoose.Schema({
  uuid: { type: String, default: v4 },
  name: { type: String, required: true }
}, {
  // overrides default collection name auto created
  collection: 'examples'
})

const Example = mongoose.model('Example', ExampleSchema)
module.exports = { Example }
