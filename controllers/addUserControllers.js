const express = require('express')
const User = require('../models/user')


const addUser = function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    //console.log(name,email,password)

    const newUser = new User({
        name:name,
        email:email,
        password:password
    }) 

    newUser.save(()=>{
        res.redirect('/api/item')
    })
    
}

exports.addUser = addUser;