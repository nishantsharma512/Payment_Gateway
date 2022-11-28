const express=require('express')
const bodyParser=require('body-parser')
const paymentRoute=require('./paymentRoute')
const cors=require('cors')
const app=express()
app.use(bodyParser.json())
app.use(cors())
app.use('/api',paymentRoute);
app.listen(5000,()=>{
    console.log('App is running at 5000 port')
})