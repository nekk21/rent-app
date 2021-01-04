const BikeServ = require('../services/bikes.service')

module.exports = {
	async getBikes(req, res, next) {
		try {
			const result = await BikeServ.getBikes(req.query)
			res.json(result)
		} catch (e) {
			res.status(400).json({ message: e.message })
		}
	},
	async getBikesById(req, res, next) {
		try {
			const result = await BikeServ.getBikesById(req.params.id)
			if (result.length < 1) {
				res.status(404)
				res.send()
			}
			res.json(result)
		} catch (e) {
			res.status(400).json({ message: e.message })
		}
	},
	async deleteBike(req, res, next) {
		try {
			if (!req.body.id) {
				res.status(400).json({ message: 'Wrong req' })
				return
			}
			const result = await BikeServ.deleteBike(req.body.id)
			if (!result) {
				res.status(404)
				res.send()
			}
			res.status(200).json(result)
		} catch (e) {
			res.status(400).json({ message: e.message })
		}
	},
	async postBike(req, res, next) {
		try {
			const possible = await BikeServ.getByName(req.body)

			if (possible) {
				res.status(400).json({
					message: 'Bike with this name already exist!!!',
				})
			}

			const result = await BikeServ.createBike(req.body)
			res.send(result)
		} catch (e) {
			res.status(400).json({
				message: e.message,
			})
		}
	},
	async updateBike(req, res, next) {
		try {
			const result = await BikeServ.updateBike(req.params.id, req.body)
			res.send(result)
		} catch (e) {
			res.status(400).json({ message: e.message })
		}
	},
	async updateStatusBike(req, res, next) {
		try {
			console.log(req.body)
			const result = await BikeServ.updateStatusBike(
				req.body.id,
				req.body
			)
			res.status(200)
			res.send(result)
		} catch (e) {
			res.status(400).json({ message: e.message })
		}
	},
}
