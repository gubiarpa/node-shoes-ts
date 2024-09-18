const mongoose = require('mongoose')

const sellSchema = new mongoose.Schema({
	id: Number,
	product: String,
	quantity: Number,
	amount: Number,
	paymentMethod: String,
})

const Sell = mongoose.model('Sell', sellSchema)

module.exports = { Sell }
