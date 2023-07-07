const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new  Schema({
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

const Student = mongoose.model('Student', studentSchema)
module.exports = Student