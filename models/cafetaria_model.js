const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cafetariaSchema = new  Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
}, {timestamps: true})

const Cafetaria = mongoose.model('Cafetaria', cafetariaSchema)
module.exports = Cafetaria