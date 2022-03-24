const router = require('../routes/userRoutes')
const User = require('../models/user')
const date = require('../models/date')

const user1 = new User({
    name:'john',
    email:"john54@gmail.com",
    password:"12345678"
})

const user2 = new User({
    name:'peter',
    email:"peter54@gmail.com",
    password:"12345678"
})

const addUsers = function(req,res){

    let day =date();

    User.find({},function(err,docs){
        if(!err){
                if(docs.length === 0){
                            
                    User.insertMany([user1,user2], function(err){
                    if(err){
                        console.log(err);
                    }else{
                        console.log('db updated succesfully');
                    }
                        })
                        res.redirect('/signup')

            }
            else{
                res.render("user-signup",{kindOfDay:day,newItemList:docs})
            }
         }else{
            console.log(err)
            
        }
    })

// user1.save();

    //res.send('user routes working');
   // console.log('user routes started succefully and database updated');
}

const getAllUsers = function(req,res){
    User.find({},(err,docs)=>{
        if(!err){
            //console.log(docs)
            res.render("all-users",{newItemList:docs})
        }else{
            console.log(err.message)
        }
    })
}



exports.addUsers = addUsers;
exports.getAllUsers = getAllUsers;
