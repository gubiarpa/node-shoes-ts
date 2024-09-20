const mongoose = require('mongoose')

const sellSchema = new mongoose.Schema({
	product: String,
	quantity: Number,
	amount: Number,
	paymentMethod: String,
})

const Sell = mongoose.model('Sell', sellSchema)

module.exports = Sell
