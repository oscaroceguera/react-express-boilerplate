const { Example } = require('../../models/example')

exports.default = async (req, res) => {
  try {
    const doc = await Example.find()
    res.send(doc)
  } catch (e) {
    res.status(400).send(e)
  }
}
