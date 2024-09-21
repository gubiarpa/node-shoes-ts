const asyncHandler = require('../middlewares/asyncHandler')
const Product = require('../models/Product')

const getAllProducts = asyncHandler(async (_, res) => {
	const products = await Product.find()
	return res.status(200).json(products)
})

const getProductById = asyncHandler(async (req, res) => {
	const { id } = req.params
	if (!id) {
		return res.status(400).json({ message: 'Product id is required' })
	}

	const product = await Product.findById(id)
	if (!product) {
		return res.status(404).json({ message: 'Product not found' })
	}
	return res.status(200).json(product)
})

module.exports = {
	getAllProducts,
	getProductById,
}
