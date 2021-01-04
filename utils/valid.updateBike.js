module.exports = (req, res, next) => {
	if (req.body.name < 3) {
		return res.status(400).json({ message: 'Min 3 symbol!' })
	}

	if (req.body.price < 0) {
		return res.status(400).json({ message: 'Price cant be negative ' })
	}

	next()
}
