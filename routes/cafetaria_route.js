const express = require('express')
const router = express.Router()

const CafetariaController = require('../controllers/cafetaria_controller')

router.get('/all', CafetariaController.all)
router.get('/show/:cafetariaId', CafetariaController.one)
router.post('/store', CafetariaController.store)

module.exports = router