const express = require('express')
const homeRoute = require('../routes/homeRoute')
const path = require('path')

const getHome = function(req,res){
   // res.render('index')
   res.sendFile(path.resolve(__dirname+"/../index.html"))
 
}

exports.getHome = getHome;