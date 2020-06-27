var mongoose = require('mongoose');
//creating schema of users in scialmedia

const user = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    firstname : {type : String, required : true},
    lastname : String,
    email :{ type : String, unique: true, required : true},
    password :{ type : String, required : true },
    phone :{ type : Number,unique: true,required : true, min:0000000000, max:9999999999},
    dateofCreation : { type: Date, default: Date.now() },
    currentlyloggedIn : Boolean,
   
});

const usermodel = mongoose.model("usermodel",user);
module.exports = usermodel