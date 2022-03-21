const mongoose = require('mongoose')


//listSchema
const listSchema = mongoose.Schema({
    name:String,
    item:String
})

//newlist model
const List = mongoose.model('List',listSchema)

module.exports =List;