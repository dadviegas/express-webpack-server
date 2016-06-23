const devPort = 5001
const browserSyncPort = 5000
const prodPort = 8000
const host = 'localhost'
const proxy = `${host}:${devPort}`

export default {
	browserSync: {
		port: browserSyncPort,
		reload: true,
		proxy
	},
	development: {
		port: devPort,
		url: `http://${proxy}/`
	},
	production: {
		port: prodPort
	}
}