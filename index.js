require('dotenv').config()
const express  = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/twitter',(req,res)=>{
    res.send("siddhdotcom")
})

app.get('/login',(req,res)=>{
    res.send(`<h1>
        please login at siddhdotcom
    </h1>`)
})

app.listen(process.env.port,()=>{
    console.log(`App listening at port ${process.env.port}`);
})