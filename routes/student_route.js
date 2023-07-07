const express = require('express')
const router = express.Router()

const StudentController = require('../controllers/student_controller')


router.post('/student-register', StudentController.studentRegister)
router.post('/student-login', StudentController.studentLogin)



module.exports = router