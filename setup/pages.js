import { getResource } from '../configuration/paths'

export default {
  // Index page, we should used the template to specify the page
  // to use from the source and the chunks each page uses.
  // title: the title of the page
  // template: template we want to use
  // filename: the file that will be generated
  // chunks: webpack chunks that the page uses
  index: {
    title: 'Boilerplate',
    template: getResource('index.html'),
    filename: './index.html',
    chunks: ['index', 'css']
  },
  glyphicons: {
    title: 'Boilerplate glyphicons',
    template: getResource('glyphicons.html'),
    filename: './glyphicons.html',
    chunks: ['css']
  },
  'pages/form': {
    title: 'Boilerplate form',
    template: getResource('pages/form/index.html'),
    filename: './pages/form/index.html',
    chunks: ['css', 'pages/from']
  }
}
