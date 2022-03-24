const express = require('express');
const { status } = require('express/lib/response');
const User = require('../models/user')


const addUser = async function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirm_password = req.body.confirm_password;

    
    //console.log(name,email,password)
    let existingUser
    try {
        existingUser = await User.findOne({email:email});
    } catch (error) {
        console.log("signup failed, try later")
        return next(error)
    }
    
if(!existingUser){
    //console.log("user does not exist you have been registered")
    const newUser = new User({
    name:name, 
    email:email,
    password:password
}) 

try {
        await newUser.save(()=>{
            res.status(200).redirect("/api/item")
            
        })
    } catch (error) {
        console.log("creating user failed")
        
    }
    
}else{
    console.log("user exit try loggging in")
    res.redirect("/api/user/signin")
  
}
            
 
// 
//res.status(201).json("signup succesfull")
//res.redirect('/api/item')
}

const loginUser = async function(req,res){
     const email = req.body.email;
     const password = req.body.password;

     let existingUser
     try {
         existingUser = await User.findOne({email:email});
    } catch (error) {
        //res.json("loging in failed, try later")
        console.log("err loging in failed, try later")
       return next(error)
     }
    
     //if(existingUser && existingUser.password ===password)
     if(existingUser)
     {
         //console.log("user exist")
       //  res.json("invalid credentials, could not log you in")
        if(existingUser.password == password){
            console.log("correct password")
            res.status(200).redirect("/api/item")
        }else{
            console.log("wrong password")//redirect to login because user exist
            res.status(404).json("wrong passwword")
            //console.log('wrong password')
        }
    }else{
        console.log("user does no exist, go to signing up")//redirect to sign up
        res.redirect('/api/user')
    } 
    // res.render('login')
    //console.log("login")
}
    
const signin = (req,res)=>{
    res.render('login')

}


exports.addUser = addUser;
exports.loginUser = loginUser;
exports.signin = signin;