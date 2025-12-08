/* eslint-disable no-undef */
const dotenv = require('dotenv')
const express = require('express')

dotenv.config()
const server = express()

const port = process.env.PORT || 3000

server.get('/', (req, res) => {
  return res.json({ hola: 'world' })
})

server.listen(port, () => {
  console.log(`server in: http://localhost:${port}`)
})
