const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const appConfig = require('./config')

const { Sell } = require('./schemas/Sell')

const port = process.env.PORT || 3000

// Middleware para permitir que el servidor interprete JSON
app.use(express.json())

// Habilitar CORS para todas las rutas y orígenes
app.use(cors())

mongoose
	.connect(appConfig.MONGODB_URI)
	.then(() => console.log('Conectado a MongoDB con Mongoose'))
	.catch((error) => console.error(error))

// Ruta de ejemplo
app.get('/', (_, res) => {
	res.send('¡Bienvenido a la API de Node JS!')
})

// Ruta para obtener datos
app.get('/api/sells', async (_, res) => {
	try {
		const sells = await Sell.find()
		return res.status(200).json(sells)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Error when retrieving sells' })
	}
})

// Ruta para crear un nuevo usuario
app.post('/api/sells', async (req, res) => {
	const newSell = new Sell({
		product: req.body.product,
		quantity: req.body.quantity,
		amount: req.body.amount,
		paymentMethod: req.body.paymentMethod,
	})

	try {
		const savedSell = await newSell.save()
		return res.status(201).json({ newSell: savedSell })
	} catch (error) {
		res.status(500).json({ error: 'Error when creating new user' })
	}

	res.status(201).json({ message: 'Usuario creado', data: newUser })
})

// Iniciar el servidor
app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`)
})
