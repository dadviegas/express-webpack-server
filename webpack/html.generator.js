import HtmlWebpackPlugin from 'html-webpack-plugin'
import setup from '../setup'

const generateHtmlTemplate = ({title, template, filename, chunks = []}) => (
  new HtmlWebpackPlugin({
    title,
    template,
    filename,
    minify: {
      removeComments: true,
      preserveLineBreaks: false,
      collapseWhitespace: true
    },
    chunks
  })
)

const htmlPages = []

for (let key in setup.pages) {
  htmlPages.push(generateHtmlTemplate(setup.pages[key]))
}

export default htmlPages
