const express = require('express')
const app = express()
const log = require('debug')('cors-demo')

app.use(express.static('public'))

app.use((req, res, next) => {
    log(req.headers)
    next()
})

app.options('/api', function (req, res) {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.set('Access-Control-Allow-Methods', "OPTIONS")
  var h = req.get('Access-Control-Request-Headers')
  res.set('Access-Control-Allow-Headers', h)
  res.set('Access-Control-Allow-Credentials', true)
  res.send('Hello World!')
})

app.all('/api', function (req, res) {
//   res.cookie('cors', 'yoyo')
  res.set('Access-Control-Allow-Credentials', true)
  res.set('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

const app2 = express()
app2.use(express.static('public'))
app2.listen(3001, function () {
  console.log('Example app2 listening on port 3001!')
})