const { body } = require('express-validator')
const Bike = require('../models/Bike')

module.exports = {
	async createBike(body) {
		const bike = new Bike({
			name: body.name,
			type: body.type,
			price: body.price,
			status: false,
		})
		return await bike.save()
	},

	async getByName(body) {
		const forCompare = await Bike.findOne({ name: body.name })
		if (forCompare) {
			return forCompare
		}
		return null
	},

	async updateBike(id, body) {
		let bike = await Bike.findOne({ _id: id })
		bike.name = body.name || bike.name
		bike.type = body.type || bike.type
		bike.price = body.price || bike.price

		return await bike.save()
	},

	async updateStatusBike(id, body) {
		let bike = await Bike.findOne({ _id: id })
		bike.status = body.status
		if (bike.status === true) {
			bike.rentStart = Date.now()
		} else {
			bike.rentStart = null
		}
		return await bike.save()
	},

	async deleteBike(id) {
		return await Bike.findOneAndRemove({ _id: id })
	},

	async getBikesById(id) {
		const bike = await Bike.findOne({ _id: id })
		return bike
	},

	async getBikes(page) {
		if (!page) page = 1
		const limit = 50
		const allBikes = await Bike.find()
			.limit(limit)
			.skip(limit * page)
			.exec()
		return allBikes
	},
}
