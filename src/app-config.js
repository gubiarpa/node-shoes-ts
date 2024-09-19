require('dotenv').config()

const appConfig = {
	PORT: process.env.PORT,
	MONGODB_URI: process.env.MONGODB_URI,
}

module.exports = appConfig
