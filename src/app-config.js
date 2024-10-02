require('dotenv').config()

const appConfig = {
	TEST_MESSAGE: process.env.TEST_MESSAGE,
	PORT: process.env.PORT,
	MONGODB_URI: process.env.MONGODB_URI,
	DELAY: process.env.DELAY,
	DELAY_OPERATIONS: process.env.DELAY_OPERATIONS,
}

module.exports = appConfig
