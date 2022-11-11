const Alert = require("../models/alertModal");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const allAlert = asyncHandler(async (req,res)=>{
   const alerts = await Alert.findOne({}).sort({_id:-1});
   res.send(alerts)
})

const addAlert = asyncHandler(async (req, res)=>{
    const {content} = req.body;

    if (!content) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
      }

    const newAlert ={
        sender: req.user._id,
        content: content
    }
    try {
        
        let alert = await Alert.create(newAlert);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
    
})

const deleteAlert = asyncHandler(async(req,res)=>{
 const {userId}= req.body
 const deleted = await Alert.findOOneAndDelete(
    userId
 )
 if (!removed) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(removed);
  }
})
const updateAlert = asyncHandler(async(req,res)=>{
///?
})


module.exports = {
    allAlert,
  addAlert,
  deleteAlert,
  updateAlert,
};
