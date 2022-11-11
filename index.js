const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const alertRoute = require('./routes/alertRoute')

mongoose.connect(process.env.DB,{useNewUrlParser:true})
        .then(()=>console.log('conected to DB'))
        .catch((err)=>console.log(err))

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods','*')
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
    });

app.use(bodyParser.json());

app.use('/api/alerts', alertRoute)


app.use((err, req, next) => { 
    console.log(err)
    next();
})
app.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
})


