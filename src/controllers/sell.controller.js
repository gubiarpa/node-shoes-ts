const asyncHandler = require('../middlewares/asyncHandler.js')
const Sell = require('../models/Sell.js')

const getAllSells = asyncHandler(async (_, res) => {
	const sells = await Sell.find()
	return res.status(200).json(sells)
})

const createSell = asyncHandler(async (req, res) => {
	const errors = validBodyAsSell(req)

	if (errors.length > 0) {
		return res.status(400).json({ errors })
	}

	const newSell = new Sell({
		productId: req.body.productId,
		quantity: req.body.quantity,
		amount: req.body.amount,
		paymentMethodId: req.body.paymentMethodId,
	})

	const savedSell = await newSell.save()
	return res.status(201).json({ newSell: savedSell })
})

const validBodyAsSell = (req) => {
	const errors = []

	if (!req.body) {
		return errors.push({ general: 'Invalid Body' })
	}

	if (!req.body.productId) {
		errors.push({ productId: 'Invalid Product ID' })
	}

	if (!req.body.quantity || req.body.quantity <= 0) {
		errors.push({ quantity: 'Invalid Quantity' })
	}

	if (!req.body.amount || req.body.amount <= 0) {
		errors.push({ amount: 'Invalid Amount' })
	}

	if (!req.body.paymentMethodId) {
		errors.push({ paymentMethodId: 'Invalid Payment Method ID' })
	}

	return errors
}

module.exports = {
	getAllSells,
	createSell,
}
