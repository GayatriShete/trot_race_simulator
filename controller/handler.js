const {createWorker, createRaceInfo}=require('../controller/CRUD')
const {generateAccessToken, verifyToken}=require('../controller/authController')
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
let flag=0,records={table:[]},setRace,breakSession,storeToken;

//To start Race event will be occur here
eventEmitter.on('startRace',()=>{
        let store;
        flag=1;
        setRace=setInterval(async()=>{
            let i=0;
            while(i<6){
                let raceObj={"event": "start", 
                "horse": {
                    "id": Math.floor(Math.random() * 2000),
                    "name": Math.floor(Math.random() * 2000)+"horse" 
                    },
                    "time": Date.now()
                }
                store=await createRaceInfo(raceObj)
                records.table.push({Start:raceObj})
                i++
            }
        },20000/* 60000 */) //after every min 6 horse will store in DB
    })

    //After every 5 min reauthenticate here
const sessionTimeOutAuth= ()=>{
clearInterval(setRace);
 verifyToken(storeToken,(user)=>{
    if(user.username) {
        eventEmitter.emit('startRace');
    }else{
        clearInterval(setRace)
        clearInterval(breakSession)
    }
})
}

//Token authentication
exports.authenticateToken=(req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401).json({msg:"Invalid Credentials"})
  let t=token.replace(/"/g, '')
    verifyToken(t,(user)=>{
        req.user=user
    })
    next()
}

//User will log and generate token here and emit to start event.
exports.login=(req,res)=>{
    const token = generateAccessToken({ username: req.body });
    storeToken=token
    res.status(200).json({msg:"successfully Logged In",Token:token})
    createWorker(req,res)
    flag=0
    records={table:[]}
        eventEmitter.emit('startRace');
        setTimeout(()=>{
            if(!flag){
                res.status(204)
            }
        },15000);
       breakSession= setInterval(()=>{
            sessionTimeOutAuth()
        },120000/* 300000 */)
}

//Real time data will fetch from here
exports.fetchResult=async (req,res)=>{
    res.status(200).json({data:records})
    //remaining update the race time.
}

//On Finish Race will be stop
   exports.finishRace=(req,res)=>{
    clearInterval(setRace)
    clearInterval(breakSession)
    records={}
    res.status(200).json({msg:"Race is finished now"})
    }
