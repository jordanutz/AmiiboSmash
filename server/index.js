const express = require('express')
const bodyParser = require('body-parser')

const controller = require('./controller.js')

const app = express()
app.use(bodyParser.json())

app.post('/api/amiibo', controller.filteredAmiibo)
app.get('/api/amiibo/:id', controller.getAmiibo)

PORT = 1993;
app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`)
})
