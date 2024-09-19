const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const appConfig = require('./app-config')

const sellRoute = require('./routes/sell.route')
const productRoute = require('./routes/product.route')
const paymentMethodRoute = require('./routes/payment-method.route')

const port = appConfig.PORT

// Allow JSON parsing for requests
app.use(express.json())

// Enable CORS
app.use(cors())

// Connect to MongoDB
mongoose
	.connect(appConfig.MONGODB_URI)
	.then(() => console.log('Conectado a MongoDB con Mongoose'))
	.catch((error) => console.error(error))

app.use('/api/sells', sellRoute)
app.use('/api/products', productRoute)
app.use('/api/payment-methods', paymentMethodRoute)

// Start the server
app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`)
})
