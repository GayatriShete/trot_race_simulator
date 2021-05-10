const Worker = require('../models/workerSchema');
const Race = require('../models/raceSchema')

exports.fetchWorker=async (req,res,next)=>{
   const worker= await Worker.find();
    res.status(200).json({success:true,data: worker})
}

exports.fetchWorkerById=async (req,res,next)=>{
   const worker= await Worker.findById();
    res.status(200).json({success:true,data: worker})
}

exports.createWorker=async (req,res,next)=>{
   const worker= await Worker.create(req.body);
    // res.status(200).json({success:true,msg:"created new worker"})
}



exports.createRaceInfo=async(data)=>{
    const race= await Race.create(data);
    return race
    // res.status(200).json({success:true,msg:"created new Race Record"})
}