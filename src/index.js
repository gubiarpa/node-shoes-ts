const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

// Middleware para permitir que el servidor interprete JSON
app.use(express.json())

// Habilitar CORS para todas las rutas y orígenes
app.use(cors())

// Ruta de ejemplo
app.get('/', (req, res) => {
	res.send('¡Bienvenido a la API de Node JS!')
})

// Ruta para obtener datos
app.get('/api/sells', (req, res) => {
	const users = [
		{
			id: 1,
			product: 'Capellada',
			quantity: 2,
			amount: 25.0,
			paymentMethod: 'Yape',
		},
		{
			id: 2,
			product: 'Pantuflas',
			quantity: 1,
			amount: 20.0,
			paymentMethod: 'Cash',
		},
		{
			id: 3,
			product: 'Cross',
			quantity: 1,
			amount: 20.0,
			paymentMethod: 'Yape',
		},
		{
			id: 4,
			product: 'Pantuflas',
			quantity: 1,
			amount: 20.0,
			paymentMethod: 'Cash',
		},
		{
			id: 5,
			product: 'Capellada',
			quantity: 1,
			amount: 30.0,
			paymentMethod: 'Cash',
		},
	]

	res.json(users)
})

// Ruta para crear un nuevo usuario
app.post('/api/users', (req, res) => {
	const newUser = req.body
	res.status(201).json({ message: 'Usuario creado', data: newUser })
})

// Iniciar el servidor
app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`)
})
