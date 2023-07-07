const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new  Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
}, {timestamps: true})

const Food = mongoose.model('Food', foodSchema)
module.exports = Food