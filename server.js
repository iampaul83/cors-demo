const express = require('express')
const app = express()
const log = require('debug')('express-app')

app.use(express.static('public'))

app.use((req, res, next) => {
    log(req.headers)
    next()
})

app.use(function (req, res, next) {
    if (req.method !== 'OPTIONS') {
        next()
        return
    }
    res.set('Access-Control-Allow-Origin', req.get('origin'))
    //   res.set('Access-Control-Allow-Credentials', true)
    res.set('Access-Control-Allow-Headers', req.get('access-control-request-headers'))
    res.set('Access-Control-Allow-Methods', 'GET')
    res.set('Access-Control-Max-Age', 86400)
    res.sendStatus(200)
})

app.all('/api', function (req, res) {
  res.cookie('cors', 'yoyo')
  res.set('Access-Control-Allow-Credentials', true)
  res.set('Access-Control-Allow-Origin', '*')
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})