//imports
const express = require("express");
const router = express.Router();
const usermodel = require("../models/usermodel");
var mongoose = require('mongoose');
var controller = require("../controllers/auth");

router.post("/signup", controller.signup);

//exports
module.exports = router;