import config from './common'
import configuration from '../configuration'
import webpack from 'webpack'
import htmlGenerator from './html.generator'
import setup from '../setup'

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'
const developmentServer = configuration.server.development

configuration.webpack.jsOutput.publicPath = developmentServer.url

for(var key in setup.chunks) {
	setup.chunks[key].push(hotMiddlewareScript)
}

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  ...htmlGenerator
]

config.devtool = 'eval-source-map'

const scssPlugin = {
  test: /\.scss$/,
  loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
}

config.plugins = plugins
config.module.loaders.push(scssPlugin)

export default config
