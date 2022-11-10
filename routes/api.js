const express = require("express")
const router = express.Router()

const Todo = require('../models/todo')

router.get('/todos',(req,res,next)=>{
    // ,'action'&'email'&'adress'&'picture'&'phone'&'fullName' 
    Todo.find({}) 
        .then((data) => res.json(data))
        .catch(next)

})

router.post('/todos',(req,res,next)=>{
    console.log("works");
    req.body.action?
    Todo.create(req.body)
        .then((data) => res.json(data))
        .catch(next):
        res.json({error:'this input is emty'})
})

router.delete('/todos/:id',(req,res,next)=>{
    Todo.findOneAndDelete({_id:req.params.id})
         .then((data)=> res.json(data))
         .catch(next)

})

router.get('/user/',(req,res,next)=>{
    Todo.find({},'action')
        .then((data) => res.json(data))
        .catch(next)
})
router.post('/users',(req,res,next)=>{
    req.body.action?
    Todo.create(req.body)
        .then((data) => res.json(data))
        .catch(next):
        res.json({error:'this input is emty'})
})



module.exports = router