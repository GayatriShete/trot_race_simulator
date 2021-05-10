const mongoose= require('mongoose');

const raceSchema= new mongoose.Schema({
        event:{type:String},
        horse: {
        id: {type:String},
        name: {type:String}
        },
        time:{type:Date}
        
})

module.exports=mongoose.model('Race',raceSchema)