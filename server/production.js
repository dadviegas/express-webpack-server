import configuration from '../configuration'
import express from 'express'
import app from './server'

// in production serve the generated static files
app.use(express.static(configuration.paths.public))

const port = configuration.server.production.port

app.listen(port, function () {
  console.log(`Production App is now running on port ${port}`)
})
