const { Example } = require('../../models/example')

exports.default = async (req, res) => {
  try {
    const example = new Example({
      name: 'Oscar Oceguera'
    })

  console.log('ENTRAAAA')

    const doc = await example.save()
    console.log('doc => ', doc)
    res.send(doc)
  } catch (e) {
    res.status(400).send(e)
  }
}
