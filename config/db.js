const mongoose=require('mongoose');

//DB Configuration
const connectDB =async ()=>{
  const conn= await mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true
})
console.log("MONGO_URI",process.env.MONGO_URI)
console.log("MongoDB Connection: ", conn.connection.host)
}


module.exports= connectDB;