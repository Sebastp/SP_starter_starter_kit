import {} from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import { createServer } from 'http'

import router from '~/core/router'
import apollo from '~/core/apollo'


const {
  PORT = 8080,
  MONGODB_URL
} = process.env


mongoose
  .connect(
    MONGODB_URL,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(err => {
    console.error(err)
  })


// Create express app
const app = express()


// Parse cookies
app.use(cookieParser())

// Enable cors
app.use(
  cors({
    allowedHeaders: ['Content-Type', 'Authorization', "Access-Control-Allow-Origin"],
    credentials: true,
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false
  })
)

// Enable GZIP compression
app.use(compression())

apollo.applyMiddleware({ app })


// Handle routes
app.use('/', router)



const httpServer = createServer(app)
apollo.installSubscriptionHandlers(httpServer)


// Start the server
httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
