const express = require('express')
const addItemRoute = require('../routes/addItemsRoute')
const Item = require('../models/items')

const addItems = function(req,res){
    console.log(req.body.newItem)
   var itemName= req.body.newItem
   // console.log(item);
   // items.push(item);
   if(itemName===''){
       console.log("kindly enter something")
       res.redirect("/")
   }else{
   const item4 = new Item({name:itemName})


item4.save();
//  console.log(item4)
res.redirect("/api/item");
   }
}

exports.addItems = addItems