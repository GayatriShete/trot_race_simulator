const jwt = require('jsonwebtoken');
const dotenv=require("dotenv")
dotenv.config({path: './config/config.env'})

exports.generateAccessToken=(username)=> {
    return jwt.sign(username, process.env.TOKEN_SECRET);
  }

exports.verifyToken=(token,cb)=> {
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)

    if (err) return cb(err)
     cb(user);
  })
}