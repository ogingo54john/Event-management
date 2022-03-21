const express= require('express')
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
//const date = require(__dirname +'/date.js')


// ! instaniate Routes
const itemRoute = require('./routes/itemsRoute')
const userRoute = require('./routes/userRoutes')
const Home = require('./routes/homeRoute')
const addItemRoute = require('./routes/addItemsRoute')
const deleteItemRoute = require('./routes/deleteItemRoute')
const newPage = require('./routes/newPageRoute')
const addUserRoute =require('./routes/addUserRoute')
const deleteUserRoute = require('./routes/deleteUserRoute')

 const app = express()

 //set views
 app.set('view engine', 'ejs');
 app.set('views','./views')
 
 app.use(bodyParser.urlencoded({extended:true}))


 //! routes
 app.use("/api/item",itemRoute)
 app.use('/api/item',addItemRoute)
 app.use('/api/item',deleteItemRoute)
 app.use('/api/user',userRoute)
 app.use('/',Home)
 app.use('api/page',newPage)
 // --------|| -------
 app.use('/api/user',addUserRoute)
 app.use('/api/user',deleteUserRoute)
 


 // incuding static files
 app.use(express.static('public'));
 app.use('/css',express.static(__dirname+'public/css'))
 app.use('/img',express.static(__dirname+'public/img'))
//  var items=["buy food","cook food","eat food"];



mongoose.connect('mongodb://localhost:27017/wikiDB')
.then(()=>{
    app.listen(9000, function(){
        console.log('app opened on port 9000');
})

 })
 .catch(err=>{
    console.log(err)
})
  