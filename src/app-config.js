require('dotenv').config()

const appConfig = {
	TEST_MESSAGE: process.env.TEST_MESSAGE,
	PORT: process.env.PORT,
	MONGODB_URI: process.env.MONGODB_URI,
}

module.exports = appConfig
