//imports
const express = require("express");
const router = express.Router();
const usermodel = require("../models/usermodel");
var mongoose = require('mongoose');
const auth = require("../routes/auth");
const bcrypt = require("bcrypt")
//signup 
const signup = async(req,res,next)=>{
    //password bcrypt
    try{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    }
    catch (error) {
        response.status(500).send(error);
    }
    //saving the new user
    const user = new usermodel ({
        _id : mongoose.Types.ObjectId(),
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
    })
    user
    .save()
    .then((result)=>{
        console.log(result);
        res.status(200).json({
            message : "user created succefully"
        })
    })
    .catch((err)=>{
        if (err.name == "ValidationError"){
            res.status(200).json({
                message : err._message
            })
        }
        console.log(err);
    })
}

module.exports= {
    signup,
   
}
