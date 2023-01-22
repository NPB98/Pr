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

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST">Product:<input type="text" name="title">Size:<input type"text" name="size"><button type="submit">Add Product</button></form>'
  );
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;