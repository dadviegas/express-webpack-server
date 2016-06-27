import { getJSResource } from '../configuration/paths'

// Examples
export default {
  // compile sass with this file
  // will be reused for all chunks, except if we want another style file
  css: getJSResource('css.js'),

  // js for html pages files if necessary
  index: getJSResource('index.js'),
  'pages/form': getJSResource('pages/form/index.js')
}