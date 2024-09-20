const { asyncHandler } = require('../middlewares/asyncHandler.js')
const { Sell } = require('../schemas/Sell.js')

const getAllSells = asyncHandler(async (_, res) => {
	const sells = await Sell.find()
	return res.status(200).json(sells)
})

const createSell = asyncHandler(async (req, res) => {
	const newSell = new Sell({
		product: req.body.product,
		quantity: req.body.quantity,
		amount: req.body.amount,
		paymentMethod: req.body.paymentMethod,
	})

	const savedSell = await newSell.save()
	return res.status(201).json({ newSell: savedSell })

	res.status(201).json({ message: 'Usuario creado', data: newUser })
})

module.exports = {
	getAllSells,
	createSell,
}
