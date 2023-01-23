//const http=require('http');
// const express=require('express');
// const bodyParser= require('body-parser');
// const app=express();

// const adminRoutes=require('./routes/admin.js');
// const shopRoutes=require('./routes/shop.js');
// // //const routes=require('./routes');
// // //const server=http.createServer(app);
// // // app.use((req,res,next)=>{
// // //     console.log('In the middleware');
// // //     next();
// // // })

// app.use(bodyParser.urlencoded({extended:false}));

// app.use('/admin',adminRoutes);
// app.use(shopRoutes);
//  app.use((req,res,next)=>{
//       res.status(404).send('<h1>Page Not Found</h1>');
//   })

// //console.log(routes.someText);
// app.listen(4000);
const express = require('express');

const fs = require('fs');

const bodyParser = require('body-parser');

const app = express();
var userName;

app.use(bodyParser.urlencoded({extended:false}));

app.get('/login',(req,res,next)=>{
    res.send('<form onsubmit = "localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/product" method="POST"><input id="username" type="text" name="username"><button type="submit">Enter Username</button></form>');
});

app.post('/product',(req,res,next)=>{
   userName=(req.body.username);
    res.redirect('/');
 });

app.get('/',(req,res,next)=>{
    //console.log(userName);
   fs.readFile('username.txt',(data)=>{
      //console.log(localStorage.getItem(userName));
      res.send(`${data}<form action="/" onsubmit="document.getElementById('user').value = localStorage.getItem('username')" method="POST">
      <input type="text" id="message" name="message"placeHolder="Type Message">
      <input type="hidden" name="username" id="user">
      <button type="submit">Send Message</button><br>
      </form>`);
   }) 
});

app.post('/',(req,res,next)=>{
   //console.log(req.body);
   //console.log(userName,req.body.message);
   fs.writeFile("username.txt",`<br>${userName}:${req.body.message}`,{flag:'a'},(err)=>{
      if(err){
         console.log(err);
      }
      else{
         res.redirect('/');
      }
   });
});

app.listen(3000);