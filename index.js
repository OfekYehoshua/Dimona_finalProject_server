const express = require("express")
const  mongoose  = require("mongoose")
const app = express()
const port = 5000
const bodyParser = require("body-parser")
require('dotenv').config()
const alertRoute = require('./routes/alertRoute')
const userRoute = require('./routes/userRoute')
const cors = require('cors')

mongoose.connect(process.env.DB,{useNewUrlParser:true})
        .then(()=>console.log('Connected to DB'))
        .catch((err)=>console.log(err))

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods','*')
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
    });

app.use(bodyParser.json());

app.use('/api', alertRoute)
app.use('/api', userRoute)


app.use((err, req, next) => { 
    console.log(err)
    next();
})
app.listen(port,()=>{
    console.log(`server is runing on port ${port}`);
})


