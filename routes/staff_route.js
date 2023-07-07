const express = require('express')
const router = express.Router()

const StaffController = require('../controllers/staff_controller')


router.post('/staff-register', StaffController.staffRegister)
router.post('/staff-login', StaffController.staffLogin)

module.exports = router