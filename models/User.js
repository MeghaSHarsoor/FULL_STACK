const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    yourname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phonenumber:{type:String,required:true},
    address:{type:String,required:true},


})

module.exports=mongoose.model('User',UserSchema)