const http=require('http');
const express=require('express');
const bodyParser= require('body-parser');
const app=express();
const path=require('path');
const fs=require('fs');

const adminRoutes=require('./routes/admin.js');
 const shopRoutes=require('./routes/shop.js');
 const errorController=require('./controller/404.js');
//const routes=require('./routes');
//const server=http.createServer(app);
// app.use((req,res,next)=>{
//     console.log('In the middleware');
//     next();
// })

 app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

 app.use('/admin',adminRoutes);
 app.use(shopRoutes);
  app.use('/',errorController.get404Page);

//console.log(routes.someText);
app.listen(4000);

