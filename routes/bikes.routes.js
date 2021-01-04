const { Router } = require('express')
const router = Router()
const Controller = require('../controller/bikes.controller')
const ValidatorPost = require('../utils/valid.postBike')
const ValidatorUpdate = require('../utils/valid.updateBike')
const ValidatorUpdateStatus = require('../utils/valid.updateStatus')

router.post('/bikes/', ValidatorPost, Controller.postBike)
router.delete('/bikes/', Controller.deleteBike)
router.get('/bikes/:id', Controller.getBikesById)
router.get('/bikes/', Controller.getBikes)
router.put('/bikes/:id', ValidatorUpdate, Controller.updateBike)
router.post('/bikes/status', ValidatorUpdateStatus, Controller.updateStatusBike)

module.exports = router
