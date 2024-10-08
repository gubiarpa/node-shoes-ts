const asyncHandler = require('../middlewares/asyncHandler.js')
const PaymentMethod = require('../models/PaymentMethod.js')

const getAllPaymentMethods = asyncHandler(async (_, res) => {
	const paymentMethods = await PaymentMethod.find()
	return res.status(200).json(paymentMethods)
})

const getPaymentMethodById = asyncHandler(async (req, res) => {
	const { id } = req.params
	if (!id) {
		return res.status(400).json({ message: 'Payment method id is required' })
	}

	const paymentMethod = await PaymentMethod.findById(id)
	if (!paymentMethod) {
		return res.status(404).json({ message: 'Payment method not found' })
	}
	return res.status(200).json(paymentMethod)
})

module.exports = {
	getAllPaymentMethods,
	getPaymentMethodById,
}
