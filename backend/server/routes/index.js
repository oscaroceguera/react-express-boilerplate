const router = require('express').Router()

const example = require('./example')

module.exports = app => {
  router.get('/', example.listExample)
  router.post('/', example.addExample)

  app.use('/api', router)
}
