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
//const path=require('path');
const router = express.Router();
//const rootDir=require('../util/path');
const products=require('../controller/product');
router.get('/add-product', products.getAddProduct);

router.post('/add-product', products.postProduct);


module.exports = router;

// const path = require('path');

// const express = require('express');

// const rootDir = require('../util/path');

// const router = express.Router();

// const products = [];

// // /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//   res.render('add-product', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-product',
//     formsCSS: true,
//     productCSS: true,
//     activeAddProduct: true
//   });
// });

// // /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect('/');
// });

// exports.routes = router;
// exports.products = products;
