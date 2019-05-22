import path from 'path'
import express from 'express'


const router = express.Router()

const { DOMAIN } = process.env


// Serve static frontend
router.use(express.static(path.join(__dirname, '../../client/build')))

// Catchall
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'))
})

export default router
