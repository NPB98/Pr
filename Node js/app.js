//const http=require('http');
const express=require('express');
const app=express();

const bodyParser= require('body-parser');

//const routes=require('./routes');
//const server=http.createServer(app);
// app.use((req,res,next)=>{
//     console.log('In the middleware');
//     next();
// })
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<form action="/product" method="POST">Product:<input type="text" name="title">Size:<input type="text" name="number"><button type="submit">Add Product</button></form>');
})
app.post('/product',(req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.number);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express.js!</h1>');
})
//console.log(routes.someText);
app.listen(4000);