const express=require('express');
const { createOrder } = require('./paymentController');
const router=express.Router()

router.get("./createOrder",createOrder);
module.exports=router;