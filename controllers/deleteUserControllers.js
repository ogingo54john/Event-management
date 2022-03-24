const express = require('express')
const User = require('../models/user')
const mongoose = require('mongoose')

const deleteUser =  function(req,res){
    const rmUser = req.params.id
    console.log(rmUser)
        if(mongoose.isValidObjectId(rmUser)){
            User.findByIdAndRemove(rmUser,(err)=>{
                res.redirect('/api/user/all')
                console.log('user successfully removed by admin')
            })
    }else{
        console.log('invalid oblet id')
    }
}

exports.deleteUser = deleteUser;