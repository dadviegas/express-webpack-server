import { version, name } from '../package.json'
const type = process.env.NODE_ENV
const isProduction = type === 'production'
const isDevelopment = type === 'development'

export default {
  name,
  type,
  isProduction,
  isDevelopment,
  version
}
