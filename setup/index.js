import pages from './pages'
import chunks from './chunks'

// With webpack we will have chunks of code that are generated.
// So we should specify the chunks if we want and then apply them
// on the html webpack plugin (this will be the pages part)
export default {
	// specify the webpack chunks that can be load.
	chunks,
	// specify the pages to be generate.
	pages
}
