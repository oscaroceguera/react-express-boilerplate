const expect = require('expect')

const { Example } = require('../../../models/example')

describe('Example model', () => {
  it('should return error is required are missing', done => {
    const example = new Example()

    example.validate(err => {
      expect(err.errors.name).not.toBeNull()
      done()
    })
  })

  it('should can save a example ', done => {
    const name = 'homero simpson'
    const example = new Example({
      name: name
    })
    expect(example.name).toBe(name)
    expect(example).toHaveProperty('uuid')
    done()
  })
})
