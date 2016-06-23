import './server'
import './static'

import configuration from '../configuration'
// load the Development or Production enviroment
require(`./${configuration.enviroment.type}`)