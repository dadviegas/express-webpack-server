import configuration from '../configuration'
import setup from '../setup'
const { webpack } = configuration

const module = {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    {
      test: /\.(png|jpg|svg)$/,
      loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
    }
  ]
}

const commonConfig = {
  entry: setup.chunks,
  output: webpack.jsOutput,
  module
}

export default commonConfig




