const asyncHandler = require('../middlewares/asyncHandler.js')
const Sell = require('../models/Sell.js')

const getAllSells = asyncHandler(async (_, res) => {
	const sells = await Sell.find()
	return res.status(200).json(sells)
})

const createSell = asyncHandler(async (req, res) => {
	const newSell = new Sell({
		productId: req.body.productId,
		quantity: req.body.quantity,
		amount: req.body.amount,
		paymentMethodId: req.body.paymentMethodId,
	})

	const savedSell = await newSell.save()
	return res.status(201).json({ newSell: savedSell })
})

module.exports = {
	getAllSells,
	createSell,
}
