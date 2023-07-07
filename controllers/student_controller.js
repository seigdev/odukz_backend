const Student = require('../models/student_model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const studentRegister = (req, res, next) => {
    var userId = req.body.userId
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }
        let student = new Student({
            userId: req.body.userId,   
            password: hashedPass
        })
        Student.findOne({userId:userId}).then(user => {
            if(user){
            res.status(404).json({
                message: 'user exists'
            })
        }else{
            student.save()
            .then(response => {
            res.json({
                message: 'User Added Successfully',
                data: response
            })
        }).catch(error => {
            res.json({
                message: 'An error occured'
            })
        })
        }
    })
    })   
    }

    const studentLogin = (req, res, next) => {
        var userId = req.body.userId
        var password = req.body.password
        Student.findOne({$or: [{userId:userId}]})
        .then(user => {
            if(user){
                bcrypt.compare(password, user.password, function(err, result){
                    if(err){
                        res.json({
                            error: err
                        })
                    }
                    if(result){
                       res.status(200).json({
                        message: 'Login Successful',
                        data: user
                       })
                    }else{
                        res.status(200).json({
                            message: 'Invalid Password',
                            
                        })
                    }
                })
            }
        })
    }

module.exports = {
        studentRegister, studentLogin
     }