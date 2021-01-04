const enumer = require('./Type')
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	type: {
		type: String,
		enum: { values: enumer },
		trim: true,
		required: true,
	},
	price: { type: Number, required: true },
	status: { type: Boolean, required: true, default: false },
	rentStart: { type: Date, default: null },
})

module.exports = mongoose.model('Bike', schema)
