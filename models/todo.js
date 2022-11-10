const mongoose = require("mongoose")


const TodoSchema = mongoose.Schema({
    action : {
        type:String,
        required:false
    },
    picture : {
        type:String,
        required:false
    },
    adress : {
        type:String,
        required:true
    }
    ,
    email : {
        type:String,
        required:true
    },
    phone : {
        type:String,
        required:false
    },
    fullName : {
        type:String,
        required:true
    }

})

const Todo = mongoose.model('todo',TodoSchema)
module.exports = Todo