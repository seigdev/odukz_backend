const Food = require('../models/food_model')

// add employee to database
const store = (req, res, next) => {
    let employee = Food({
        name: req.body.name,
        price: req.body.price,
    }) 
    console.log(employee)
    employee.save()
    .then(response => {
        res.status(201).json({
            message: 'Food Created Successfully',
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
    Food.find()
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
    Food.findById(cafetariaId)
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
    all, one, store, 
}