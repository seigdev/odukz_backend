const express = require('express')
const router = express.Router()

const FoodController = require('../controllers/food_controller')

router.get('/all', FoodController.all)
router.post('/store', FoodController.store)

module.exports = router