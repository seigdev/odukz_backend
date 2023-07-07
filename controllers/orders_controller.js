const Orders = require('../models/orders_model')
const Student = require('../models/student_model')
const Staff = require('../models/staff_model')
const Cafetaria = require('../models/cafetaria_model')
const twilio = require('twilio');

// add order to database
const studentOrder = (req, res, next) => {
    var userId = req.body.Id
    var cafetariaNumber = req.body.cafetariaNumber
    var name = req.body.name
    var quantity = req.body.quantity
    var location = req.body.location
    let order = Orders({
        userId: req.body.userId,
        name: req.body.name,
        price: req.body.price,
        cafetariaNumber: req.body.cafetariaNumber,
        quantity: req.body.quantity,
        location: req.body.location
    }) 
    order.save()
    .then(response => {
        res.status(201).json({
            message: 'Order Placed Successfully',
            data: response
        })
        const client = twilio(
        'ACc837fae39258cf7e3ad0c965c7f48bf7', 
        'd13339360106662b7a945a4f5a4557e3',
        );
        // Send SMS
        client.messages
          .create({
            body: 'You have an order with the following details: ' 
            + 'Food Item: ' + name + ' Quantity: ' + quantity
            + ' Location: ' + location,
            from: '+16516615073',
            to: cafetariaNumber,
          })
          .then((message) => console.log('SMS sent:', message.sid))
          .catch((error) => console.error('Error sending SMS:', error));
    }).catch(error => {
        console.log(error)
        res.status(!200).json({
            message: error
        })
    })
    Student.updateOne(userId, {$push:{orders: order}})
    .then(response => {
        console.log(response)
        
    }).catch(error => {
        console.log(error)
    }) 
   
}

const staffOrder = (req, res, next) => {
    var userId = req.body.Id
    var cafetariaNumber = req.body.cafetariaNumber
    var name = req.body.name
    var quantity = req.body.quantity
    var location = req.body.location
    let order = Orders({
        userId: req.body.userId,
        name: req.body.name,
        cafetariaNumber: req.body.cafetariaNumber,
        quantity: req.body.quantity,
        location: req.body.location
    }) 
    order.save()
    .then(response => {
        res.status(201).json({
            message: 'Order Placed Successfully',
            data: response
        })
        const client = twilio(
            'ACc837fae39258cf7e3ad0c965c7f48bf7', 
            'd13339360106662b7a945a4f5a4557e3',
            );
        // Send SMS
        client.messages
          .create({
            body: 'You have an order with the following details: ' 
            + 'Food Item: ' + name + ' Quantity: ' + quantity
            + ' Location: ' + location,
            from: '+16516615073',
            to: cafetariaNumber,
          })
          .then((message) => console.log('SMS sent:', message.sid))
          .catch((error) => console.error('Error sending SMS:', error));
    }).catch(error => {
        console.log(error)
        res.status(!200).json({
            message: error
        })
    })

    Staff.updateOne(userId, {$push:{orders: order}})
    .then(response => {
        console.log(response)
      
    }).catch(error => {
        console.log(error)
    })
}

module.exports = {
    studentOrder, staffOrder
}