module.exports = (req, res, next) => {
	if (!req.body.name) {
		return res.status(400).json({ message: 'Name field is empty' })
	}

	if (!req.body.price) {
		return res.status(400).json({ message: 'Price field is empty' })
	}

	if (!req.body.type) {
		return res.status(400).json({ message: 'Type field is empty' })
	}
	next()
}
