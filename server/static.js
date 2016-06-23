import configuration from '../configuration'
import express from 'express'
import app from './server'

// All the static resources like images, css, *.ico, ...
// this avoids have to copy the folder to the generated public folder
// and it's used for production and development.
app.use('/assets', express.static(configuration.paths.assets))