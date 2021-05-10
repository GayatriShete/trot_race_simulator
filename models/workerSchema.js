const mongoose= require('mongoose');

const workerSchema= new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    }
})

module.exports=mongoose.model('Worker',workerSchema)