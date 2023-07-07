const express = require('express')
const router = express.Router()

const OrderController = require('../controllers/orders_controller')


router.post('/student-order', OrderController.studentOrder)
router.post('/staff-order', OrderController.staffOrder)


module.exports = router