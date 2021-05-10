const express=require("express");
const {createWorker, fetchWorker}=require('../controller/CRUD')
const {login,authenticateToken,fetchResult,finishRace}= require('../controller/handler')
const router=express.Router();

router.route('/result').get(authenticateToken,fetchResult) 
router.route('/storeWorker').post(createWorker)
router.route('/auth').post(login)
router.route('/finish').get(finishRace)
router.route('/getWorker').post(fetchWorker)


module.exports=router;
