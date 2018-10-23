require('./config/config')
const app = require('express')()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { mongoose } = require('./db/mongoose')
const cors = require('cors')
const port = process.env.PORT

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

const routes = require('./routes')

routes(app)

app.listen(port, () => {
  console.log(`Started up at port ${port}`)
})

module.exports = { app }
