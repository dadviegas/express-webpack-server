import configuration from '../configuration'
import webpack from 'webpack'
import app from './server'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevConfig from '../webpack/development.config.babel.js'
import http from 'http'

const compiler = webpack(webpackDevConfig)
const developmentServer = configuration.server.development
const browserSyncServer = configuration.server.browserSync

const server = http.createServer(app)

app.use(webpackDevMiddleware(compiler, {
  publicPath: developmentServer.url,
  noInfo: true,
  stats: {
      colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))

// server.listen(port, function(){
//   console.log(`${enviromentType} App is now running on port ${port}`)
// })

// webpack handles js and sass, this will handle the reload for html
const bs = require('browser-sync').create()

app.listen(developmentServer.port, function(){
  bs.init({
    open: false,
    notify: false,
    ui: false,
    proxy: browserSyncServer.proxy,
    files: ['./source/**/*.html'],
    port: browserSyncServer.port,
    reload: browserSyncServer.reload
  });

  console.log(`Development App is now running on port ${browserSyncServer.port} (by browsersync).`)
})
