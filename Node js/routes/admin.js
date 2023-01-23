// const express=require('express');
// const router=express.Router();


// router.get('./add-product',(req,res,next)=>{
//     console.log('In another middleware');
//     res.send('<form action="/add-product" method="POST">Product:<input type="text" name="title"><button type="submit">Add Product</button></form>');
// })
// router.post('./add-product',(req,res,next)=>{
//     console.log(req.body.title);
//     console.log(req.body.number);
//     res.redirect('/');
// })

// module.exports=router;

const express = require('express');
const path=require('path');
const router = express.Router();
const rootDir=require('../util/path');

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});


module.exports = router;