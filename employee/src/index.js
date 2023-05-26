const express = require('express') ; 
const app = express() ; 
app.use(express.json()) ; 

const router = require('./rest-api-services') ; 
app.use(express.urlencoded({ extended: true }));

app.use('/' , router) ; 

app.listen(4000 , ()=>{
    console.log(`running on port 4000`)
})