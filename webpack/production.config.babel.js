import config from './common'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import configuration from '../configuration'
import htmlGenerator from './html.generator'

const { webpack } = configuration

const plugins = [
  new ExtractTextPlugin(`${webpack.cssOutput.path}${webpack.cssOutput.filename}`, {
    allChunks: true
  }),
  ...htmlGenerator
]

const extractPluginConf = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap')
}

config.plugins = plugins
config.module.loaders.push(extractPluginConf)

export default config