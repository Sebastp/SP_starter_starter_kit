import {} from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import compression from 'compression'

import { createServer } from 'http'

import router from '~/core/router'
import data from './data'


const {
  PORT = 8080
} = process.env



// Create express app
const app = express()



// Enable cors
app.use(cors())

// Enable GZIP compression
app.use(compression())



app.post('/getdata', function (req, res) {
  return res.send(data)
})


// Handle routes
app.use('/', router)



app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);
