const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
	cors({
		origin: '*',
		optionsSuccessStatus: 200,
		methods: ' GET, PUT, POST, DELETE',
	})
)

app.use('/api', require('./routes/bikes.routes'))

const PORT = config.get('port') || 5000

app.use(function (req, res, next) {
	let err = new Error('Not Found')
	err.status = 404
	next(err)
})
// handle errors
app.use(function (err, req, res, next) {
	console.log(err)

	res.status(404).json({
		message:
			'This path probably does not exist or there are some errors on a server.',
	})
})

async function start() {
	try {
		await mongoose.connect(config.get('mongoUrl'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		app.listen(PORT, () =>
			console.log(`Server has been started on ${PORT} !`)
		)
	} catch (e) {
		console.log(`server Error`, e.message)
		process.exit(1)
	}
}

start()
