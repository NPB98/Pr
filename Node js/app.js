//const http=require('http');
const express=require('express');
const app=express();

//const routes=require('./routes');
//const server=http.createServer(app);
app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
})
app.use((req,res,next)=>{
    console.log('In another middleware');
})
//console.log(routes.someText);
app.listen(4000);