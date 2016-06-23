import enviroment from './enviroment'
import paths from './paths'
import { join } from 'path'

export default {
  jsOutput: {
    filename: `js/[name]/build.${enviroment.version}.js`,
    path: paths.public,
    publicPath: '/'
  },
  cssOutput: {
    path: 'style/',
    filename: `build.${enviroment.version}.css`
  }
}