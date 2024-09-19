const { Sell } = require('../schemas/sell')

const getAllSells = async (_, res) => {
	try {
		const sells = await Sell.find()
		return res.status(200).json(sells)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Error when retrieving sells' })
	}
}

const createSell = async (req, res) => {
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
}

module.exports = {
	getAllSells,
	createSell,
}
