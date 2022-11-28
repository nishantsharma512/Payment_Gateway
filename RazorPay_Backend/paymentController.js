const Razorpay=require('razorpay')
require('dotenv').config()
var instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.SECRET_ID,
  });

exports.createOrder= (req,res)=>{

}