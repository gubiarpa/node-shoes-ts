require('dotenv').config()

const appConfig = {
	MONGODB_URI: process.env.MONGODB_URI,
}

module.exports = appConfig
