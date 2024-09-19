const { Product } = require('../schemas/Product')

const getAllProducts = async (_, res) => {
	try {
		const products = await Product.find()
		return res.status(200).json(products)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Error when retrieving products' })
	}
}

const getProductById = async (req, res) => {
	try {
		const { id } = req.params
		const product = await Product.findById(id)
		if (!product) {
			return res.status(404).json({ message: 'Product not found' })
		}
		return res.status(200).json(product)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Error when retrieving products' })
	}
}

module.exports = {
	getAllProducts,
	getProductById,
}
