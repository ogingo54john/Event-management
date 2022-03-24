const mongoose = require('mongoose')
const uniqueValidator = require("mongoose-unique-validator")
//const encrypt = require("mongoose-encryption");


const userSchema = new  mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true,minlength:8}

})

userSchema.plugin(uniqueValidator)

//var encKey = "J/zNLhysm3yMP8v24+gsCZe7dccgq4pX5bxrM6X0vHM=";
//var sigKey ="ZR35/JqMv0J1V7JU+WMkV2U3HOjadPS6S6DExi2lv5v1N7S1T1I6Jm33ZSHMlnjz5qJeG0j3Qqm7ECvHMSr+Mg==";


//userSchema.plugin(encrypt, { encryptionKey: encKey, signingKey: sigKey.at,encryptedFields:["password"] });




module.exports = mongoose.model('User',userSchema)