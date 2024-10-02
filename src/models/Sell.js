const mongoose = require('mongoose')

const sellSchema = new mongoose.Schema({
	productId: String,
	quantity: Number,
	amount: Number,
	paymentMethodId: String,
})

const Sell = mongoose.model('Sell', sellSchema)

module.exports = Sell
