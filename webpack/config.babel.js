import configuration from '../configuration'

export default require(`./${configuration.enviroment.type}.config.babel.js`).default
