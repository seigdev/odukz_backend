const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ordersSchema = new  Schema({
    userId: {
        type: String
      },
    name: {
        type: String
    },
    cafetariaEmail: {
        type: String
    },
    price: {
        type: String
    },
    quantity: {
        type: Number
    },
    location: {
        type: String
    },
}, {timestamps: true})

const Orders = mongoose.model('Orders', ordersSchema)
module.exports = Orders