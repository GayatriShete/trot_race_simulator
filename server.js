const express=require("express");
const dotenv=require("dotenv")
const connectDB=require("./config/db")
const routing=require('./route/execute')

dotenv.config({path: './config/config.env'})
const port=process.env.PORT || 3002

connectDB();
const app=express();

app.use(express.json())
app.use('/api/v1',routing)

app.listen(port,'0.0.0.0',()=>{
    console.log("Server started on: ",3002);
})

process.on('uncaughtException', function(err) {
    // Handle the error safely
    console.log("Error-",err)
})