import { join, resolve } from 'path'

const sourcePath = resolve('./source')

// getJSResource is used to return an array for the resource
// this is used later for development to inject webpack-hot-middleware
// Resource should be a relative path within source
export const getResource = (resource) => join(sourcePath, resource)
export const getJSResource = (resource) => [getResource(resource)]

export default  {
  source: sourcePath,
  public: resolve('./public'),
  assets: resolve('./assets')
}
