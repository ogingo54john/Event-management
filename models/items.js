const mongoose = require('mongoose')


//item schema
const itemSchema = new mongoose.Schema({
    name:String
})

// item model

module.exports =mongoose.model('Item',itemSchema)