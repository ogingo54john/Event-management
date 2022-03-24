const mongoose = require('mongoose')


//item schema
const itemSchema = new mongoose.Schema({
    name:String
})

const newListSchema = new mongoose.Schema({
    name:String,
    items:[itemSchema]
})

//module.exports =mongoose.model('Item',itemSchema)
const Item = mongoose.model("Item",itemSchema);
const newList = mongoose.model("newList",newListSchema);

module.exports =Item;
module.exports =newList;