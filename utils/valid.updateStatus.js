module.exports = (req, res, next) => {
	if (req.body.status === undefined) {
		return res.status(400).json({ message: 'Status field is empty' })
	}
	next()
}
