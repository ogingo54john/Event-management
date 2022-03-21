const express = require('express')
const router = require('../routes/newPageRoute')

const getNewPage =  function(req,res){
    res.send('this is new page of activity')
}

exports.getNewPage = getNewPage
