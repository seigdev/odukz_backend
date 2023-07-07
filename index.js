const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

const StudentRoute = require('./routes/student_route')
const StaffRoute = require('./routes/staff_route')
const CafetariaRoute = require('./routes/cafetaria_route')
const FoodRoute = require('./routes/food_route')
const OrderRoute = require('./routes/orders_route')

// change connection string
mongoose.connect('mongodb+srv://odukz:odukzdatabase@cluster1.dgni5n6.mongodb.net/?retryWrites=true&w=majority', 
{   
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', (error) => {
    console.log(error)
})

db.on('connected', () => {
    console.log('Databases connection established.')
})


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// upload files to database and also uploads folder
app.use('/uploads', express.static('uploads'))


// server port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT)
})

// set route with url
app.use('/student', StudentRoute)
app.use('/staff', StaffRoute)
app.use('/cafetaria', CafetariaRoute)
app.use('/food', FoodRoute)
app.use('/orders', OrderRoute)