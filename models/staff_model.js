const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new  Schema({
    userId: {
        type: String
    },
    password: {
        type: String
    },
    orders: {
      type: Array,
      default: []
    }
}, {timestamps: true})

const Staff = mongoose.model('Staff', staffSchema)
module.exports = Staff