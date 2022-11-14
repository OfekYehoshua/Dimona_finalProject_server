const asyncHandler = require('express-async-handler')
const generateToken = require('../config/genarateToken')
const User = require('../models/userModel')

// api/user   POST gets in body firstName,lastName,phone,password  and optionally isAdmin default false
const registerUser = asyncHandler(async (req,res)=>{
 const {firstName,lastName,phone,password} = req.body
 if(!firstName || !phone || !password ||!lastName){
    res.status(400)
    throw new Error("please Enter all the fiels")
 }
 const userExist = await User.findOne({phone})
 if(userExist){
    res.status(400)
    throw new Error("User already exist")
 } else{
 const user = await User.create({firstName,lastName,phone,password})
 if(user){
    res.status(201).json({
        _id:user._id,
        firstName:user.firstName,
        lastName:user.lastName,
        phone:user.phone,
        token: generateToken(user._id)
    })
 }else{
    throw new Error("Failed to create User try again later")
 }
}})

const authUser = asyncHandler(async(req,res)=>{
   const {phone,password} = req.body
   const user = await User.findOne({phone})
   if(user && await user.matchPassword(password) ){
      res.status(201).json({
         _id:user._id,
        firstName:user.firstName,
        lastName:user.lastName,
        phone:user.phone,
        token: generateToken(user._id)
      })
   }else{
      res.status(401)
      throw new Error("Wrong Phone or Password")
   }
})

const allUsers = asyncHandler(async(req,res)=>{
   const keyword =req.query.search?{
      $or:[
         {firstName:{$regex:req.query.search,$options:"i"}},
         {phone:{$regex:req.query.search,$options:"i"}},
      ]
   }:{}
   const users = await User.find(keyword).find({_id:{$ne:req.user._id}})
   res.send(users)
})


module.exports ={registerUser,authUser,allUsers}