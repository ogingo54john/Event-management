const express = require('express')
const deleteItemRoute =require('../routes/deleteItemRoute')
const Item = require('../models/items');
const items = require('../models/items');
const mongoose = require('mongoose')

const deleteItems = function(req,res){
   //const checked = req.body.checkedbox;
   const id = req.params.id;
   console.log(id)
   //console.log(checked)
  //const checked = "6230816d14cebfd402e18605";"623063cae0e4986300a56172"
  //if( !mongoose.Types.ObjectId.isValid(id) ) {return false}else{}
  if(mongoose.Types.ObjectId.isValid(id)){
    Item.findByIdAndRemove(id,function(err){
        if(err){
            console.log(err.message)
            //res.json({message:err.message})
        }else{
            console.log('item succesfully deleted')
           
        }
        res.redirect('/api/item')
    })
}else{console.log('invalid id '+id)}
    // Item.findByIdAndRemove(checked, function(err){
    //     if(!err){
    //     console.log("succesfully deleted the item");
    //     }else{
    //         console.log("there was an error delete unsuccessfull");
    //     }
    //     res.redirect("/");
    // });
}


exports.deleteItems =deleteItems

