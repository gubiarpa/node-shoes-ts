const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const appConfig = require('./app-config.js')

const port = appConfig.PORT

// const sellRoute = require('./routes/sell.route.js')
// const productRoute = require('./routes/product.route.js')
// const paymentMethodRoute = require('./routes/payment-method.route.js')

console.log('Starting server...')
console.log(`Port: ${port}`)
console.log(`AppFolder: ${__dirname}`)

// Allow JSON parsing for requests
app.use(express.json())

// Enable CORS
app.use(cors())

// Connect to MongoDB
mongoose
	.connect(appConfig.MONGODB_URI)
	.then(() => console.log('Conectado a MongoDB con Mongoose'))
	.catch((error) => console.error(error))

/// Default route
app.get('/', (_, res) => {
	res.send('¡Bienvenido a la API de Node JS!')
})

/// Routes
// app.use('/api/sells', sellRoute)
// app.use('/api/products', productRoute)
// app.use('/api/payment-methods', paymentMethodRoute)

// Start the server
app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`)
})
