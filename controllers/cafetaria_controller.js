const Cafetaria = require('../models/cafetaria_model')

// add employee to database
const store = (req, res, next) => {
    let cafe = Cafetaria({
        name: req.body.name,
        email: req.body.email,
    }) 
    console.log(cafe)
    cafe.save()
    .then(response => {
        res.status(201).json({
            message: 'Employee Added Successfully',
            data: response
        })
    }).catch(error => {
        console.log(error)
        res.status(!200).json({
            message: error
        })
    })
}

// show list of cafetaria
const all = (req, res, next) => {
    Cafetaria.find()
    .then(response => {
        res.status(200).json({
            data: response
        })
    }).catch(error => {
        res.status(!200).json({
            message: 'An error occured'
        })
    })
}

// get cafetaria by ID
const one = (req, res, next) => {
    const cafetariaId = req.params.cafetariaId
    Cafetaria.findById(cafetariaId)
    .then(response => {
        res.status(200).json({
            data: response
        })
    }).catch(error => {
        res.status(!200).json({
            message: 'An error occured'
        })
    })
}

module.exports = {
    all, one, store
}